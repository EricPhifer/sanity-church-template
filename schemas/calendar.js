import { CgProfile as icon } from 'react-icons/cg';

export default {
    name: 'calendar',
    title: 'Calendar Events',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title of Event', 
        type: 'string' 
      },
      { 
        name: 'eventimage', 
        title: 'Event Image', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'eventalt', 
        title: 'Alternative text for Profile Image', 
        type: 'string' 
      },
      { 
        name: 'date', 
        title: 'Date & Time', 
        type: 'datetime' 
      },
      { 
        name: 'description', 
        title: 'Description', 
        type: 'array',
        of: [
          { type: 'block'},
        ] 
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'eventimage',
        subtitle: 'date',
      },
    },
  }