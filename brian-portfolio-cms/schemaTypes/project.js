export default {
  name: 'project',
  title: 'Project Entries',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'stack',
      title: 'Tech Stack Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'desc',
      title: 'Project Description',
      type: 'text',
    },
    {
      name: 'videoUrl',
      title: 'Walkthrough Video Link (Cloudinary Link)',
      type: 'url',
    },
    {
      name: 'status',
      title: 'Development Status (e.g., In Progress)',
      type: 'string',
    },
    {
      name: 'github',
      title: 'GitHub Repository URL',
      type: 'url',
    },
    {
      name: 'live',
      title: 'Live Preview URL',
      type: 'url',
    }
  ]
}
