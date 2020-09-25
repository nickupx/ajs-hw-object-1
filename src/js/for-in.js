/* eslint-disable no-plusplus */
/* eslint-disable guard-for-in */
const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}

export default function orderByProps(object, order) {
  const arr = []
  for (const prop in object) {
    arr.push({ key: prop, value: object[prop] })
  }
  arr.sort((a, b) => (a.key > b.key ? 1 : -1));
  if (order) {
    for (let i = order.length - 1; i >= 0; i--) {
      const index = arr.findIndex((item) => item.key === order[i])
      const item = arr[index]
      arr.splice(index, 1)
      arr.unshift(item)
    }
  }
  return arr
}

orderByProps(obj, ['name', 'defence', 'level'])
