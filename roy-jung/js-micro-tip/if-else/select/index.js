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

const handleKeyDown = (e) => {
  if (e.code !== 'ArrowUp' && e.code !== 'ArrowDown') return
  let selected = [0]

  if (e.code === 'ArrowUp') {
    if (e.altKey) {
      if (e.shiftKey) {
        selected = select(cursors[1], cursors[0] - 5)
      } else {
        selected = move(cursors[0] - 5)
      }
    } else {
      if (e.shiftKey) {
        selected = select(cursors[1], cursors[0] - 1)
      } else {
        selected = move(cursors[0] - 1)
      }
    }
  } else if (e.code === 'ArrowDown') {
    if (e.altKey) {
      if (e.shiftKey) {
        selected = select(cursors[1], cursors[0] + 5)
      } else {
        selected = move(cursors[0] + 5)
      }
    } else {
      if (e.shiftKey) {
        selected = select(cursors[1], cursors[0] + 1)
      } else {
        selected = move(cursors[0] + 1)
      }
    }
  }

  list.forEach((item, i) => {
    item.classList.toggle('current', i === cursors[0])
    item.classList.toggle('selected', selected.includes(i))
  })
}

document.body.addEventListener('keydown', handleKeyDown)
