import orderByProps from '../for-in'

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
}

test('should sort', () => {
  expect(orderByProps(obj, ['name', 'defence', 'level'])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'defence', value: 40 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'health', value: 10 },
  ])
})

test('should sort alphabetically', () => {
  expect(orderByProps(obj)).toEqual([
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ])
})
