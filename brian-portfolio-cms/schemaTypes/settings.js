export default {
  name: 'settings',
  title: 'Profile Settings',
  type: 'document',
  fields: [
    {
      name: 'fullName',
      title: 'Full Name',
      type: 'string',
    },
    {
      name: 'title',
      title: 'Professional Title / Subtitle',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Profile ID Photo',
      type: 'image',
      options: { hotspot: true } // Lets you crop/re-center your portrait visually
    },
    {
      name: 'resumePdf',
      title: 'Upload Resume (CV) PDF',
      type: 'file',
      options: {
        accept: '.pdf' // Ensures you only upload PDF formats
      }
    }
  ]
}
