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
  SHIFT_ALT_UP: () => select(cursors[1], cursors[0] - 5),
  NoSHIFT_ALT_UP: () => move(cursors[0] - 5),

  SHIFT_NoALT_UP: () => select(cursors[1], cursors[0] - 1),
  NoSHIFT_NoALT_UP: () => move(cursors[0] - 1),

  SHIFT_ALT_DOWN: () => select(cursors[1], cursors[0] + 5),
  NoSHIFT_ALT_DOWN: () => move(cursors[0] + 5),

  SHIFT_NoALT_DOWN: () => select(cursors[1], cursors[0] + 1),
  NoSHIFT_NoALT_DOWN: () => move(cursors[0] + 1)
}

const handleKeyDown = (e) => {
  if (e.code !== 'ArrowUp' && e.code !== 'ArrowDown') return
  const shift = e.shiftKey ? 'SHIFT' : 'NoSHIFT'
  const alt = e.altKey ? 'ALT' : 'NoALT'
  const arrow = e.code === 'ArrowUp' ? 'UP' : 'DOWN'
  const key = [shift, alt, arrow].join('_')
  const selected = keyMap[key]()

  list.forEach((item, i) => {
    item.classList.toggle('current', i === cursors[0])
    item.classList.toggle('selected', selected.includes(i))
  })
}

document.body.addEventListener('keydown', handleKeyDown)
