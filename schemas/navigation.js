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
        title: 'Logo', 
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
        name: 'mobilebg', 
        title: 'Background for Mobile Navigation', 
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'links',
        title: 'Links to Pages',
        type: 'array',
        of: [
          {type: 'PageLinks'}
        ],
      }
    ],
  }