import { GrContact as icon } from 'react-icons/gr';

export default {
    name: 'guestsermons',
    title: 'Guest Sermons',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title', 
        type: 'string',
      },
      { 
        name: 'description', 
        title: 'Sermon Description', 
        type: 'array',
        of: [
          {type: 'block'},
        ]
      },
      { 
        name: 'video', 
        title: 'Video of Guest Sermon', 
        type: 'array',
        of: [
          { type: 'Videos' }
        ]
      },
    ],
  }