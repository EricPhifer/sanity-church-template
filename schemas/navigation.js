import { BsSegmentedNav as icon } from 'react-icons/bs';

export default {
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title for CMS Display', 
        type: 'string' 
      },
      { 
        name: 'mainlogo', 
        title: 'Logo with Alt Text', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      { 
        name: 'mainalt', 
        title: 'Alternative text for Main Image', 
        type: 'string' 
      },
      {
        name: 'pagename',
        title: 'Name of Page',
        type: 'string',
      },
      {
        name: 'pagelink',
        title: 'Link to Page',
        type: 'string',
      },
    ],
  }