// schemaTypes/homeVideo.js
export default {
  name: 'homeVideoDoc',
  title: 'Home Video Overview',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title / Label',
      type: 'string',
      initialValue: 'Main Portfolio Overview Video'
    },
    {
      name: 'videoFile',
      title: 'Upload Portfolio Video (.mp4 / .webm)',
      type: 'file',
      options: {
        accept: '.mp4, .webm'
      }
    }
  ]
}
