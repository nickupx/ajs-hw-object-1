/* eslint-disable linebreak-style */
import orderByProps from '../app'

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}

test('should sort', () => {
  const result = orderByProps(obj, ['name', 'defence', 'level'])
  expect(result).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
  ])
})

test('should sort alphabetically', () => {
  const result = orderByProps(obj)
  expect(result).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ])
})

