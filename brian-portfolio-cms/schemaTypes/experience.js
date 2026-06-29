export default {
  name: 'experience',
  title: 'Experience History',
  type: 'document',
  fields: [
    { name: 'role', title: 'Job Role / Title', type: 'string' },
    { name: 'company', title: 'Company Name', type: 'string' },
    { name: 'period', title: 'Employment Period (e.g., 2026 - Present)', type: 'string' },
    { name: 'desc', title: 'Job Description', type: 'text' },
    { name: 'order', title: 'Display Order (1 for top, 2, 3...)', type: 'number' }
  ]
}
