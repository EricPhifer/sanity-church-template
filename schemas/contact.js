import { GiBugleCall as icon } from 'react-icons/gi';

export default {
    name: 'contact',
    title: 'Contact Content',
    type: 'document',
    icon,
    fields: [
      { 
        name: 'title', 
        title: 'Title', 
        type: 'string',
      },
      { 
        name: 'phone', 
        title: 'Phone Number', 
        type: 'string',
      },
      { 
        name: 'streetaddress', 
        title: 'Street Address', 
        type: 'string',
      },
      { 
        name: 'cityaddress', 
        title: 'City, State & Zip code', 
        type: 'string',
      },
      { 
        name: 'content', 
        title: 'Contact Page Content', 
        type: 'string',
      },
      { 
        name: 'socialmedia', 
        title: 'Social Media Link', 
        type: 'string',
      },
    ],
  }