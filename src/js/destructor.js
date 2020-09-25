const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    },
  ],
}

export default function getArray(obj) {
  const { special } = obj
  for (const item of special) {
    const { description = 'Описание недоступно' } = item
    item.description = description
  }
  return special
}

getArray(character)
