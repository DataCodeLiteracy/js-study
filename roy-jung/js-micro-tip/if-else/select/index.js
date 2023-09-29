const list = Array.from(document.querySelector('#shortcuts').children)
const itemLength = list.length

const getBoundValue = (value) => Math.min(Math.max(value, 0), itemLength - 1)
const getMinMax = (from, to) => ({
  min: getBoundValue(Math.min(from, to)),
  max: getBoundValue(Math.max(from, to))
})

const select = (from, to) => {
  const isUpward = from >= to
  const { min, max } = getMinMax(from, to)
  cursors = isUpward ? [min, max] : [max, min]
  return Array.from({ length: max - min + 1 }, (_, i) => i + min)
}

const move = (to) => {
  const target = getBoundValue(to)
  cursors = [target, target]
  return [target]
}

let cursors = [0, 0]

const keyMap = {
  // shift / alt / arrowUp(1)
  _111: () => select(cursors[1], cursors[0] - 5),
  _011: () => move(cursors[0] - 5),

  _101: () => select(cursors[1], cursors[0] - 1),
  _001: () => move(cursors[0] - 1),

  _110: () => select(cursors[1], cursors[0] + 5),
  _010: () => move(cursors[0] + 5),

  _100: () => select(cursors[1], cursors[0] + 1),
  _000: () => move(cursors[0] + 1)
}

const handleKeyDown = (e) => {
  if (e.code !== 'ArrowUp' && e.code !== 'ArrowDown') return
  const shift = +e.shiftKey // 1 0
  const alt = +e.altKey
  const arrow = +(e.code === 'ArrowUp')
  const key = '_' + [shift, alt, arrow].join('')
  const selected = keyMap[key]()

  list.forEach((item, i) => {
    item.classList.toggle('current', i === cursors[0])
    item.classList.toggle('selected', selected.includes(i))
  })
}

document.body.addEventListener('keydown', handleKeyDown)
