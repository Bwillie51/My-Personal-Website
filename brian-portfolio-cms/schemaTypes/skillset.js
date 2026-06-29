export default {
  name: 'skillset',
  title: 'Technical Skillset',
  type: 'document',
  fields: [
    { name: 'title', title: 'Category Title (e.g., Frontend Stack)', type: 'string' },
    { name: 'skills', title: 'Skills Tags List', type: 'array', of: [{ type: 'string' }] },
    { name: 'order', title: 'Display Order (1, 2, 3...)', type: 'number' }
  ]
}
