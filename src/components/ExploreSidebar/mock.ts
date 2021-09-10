export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    fields: [
      { name: 'under-50', label: 'Under $50' },
      { name: 'under-100', label: 'Under $100' },
      { name: 'under-150', label: 'Under $150' },
      { name: 'under-200', label: 'Under $200' },
      { name: 'free', label: 'free' },
      { name: 'discounted', label: 'discounted' }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        name: 'high-to-low',
        label: 'High to low'
      },
      {
        name: 'low-to-high',
        label: 'Low to high'
      }
    ]
  },
  {
    title: 'System',
    name: 'system',
    type: 'checkbox',
    fields: [
      { name: 'windows', label: 'Windows' },
      { name: 'mac', label: 'Mac' },
      { name: 'linux', label: 'Linux' }
    ]
  },
  {
    title: 'Genre',
    name: 'genre',
    type: 'checkbox',
    fields: [
      { name: 'action', label: 'Action' },
      { name: 'adventure', label: 'Adventure' },
      { name: 'fps', label: 'FPS' },
      { name: 'mmorpg', label: 'MMORPG' }
    ]
  }
]
