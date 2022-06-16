import { GrContact as icon } from 'react-icons/gr';

export default {
    name: 'sermons',
    title: 'Sermons',
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
        title: 'Video of Sermon', 
        type: 'array',
        of: [
          {
            name: 'guestsermon',
            title: 'Video of Sermon',
            type: 'mux.video'
          }
        ]
      },
    ],
  }