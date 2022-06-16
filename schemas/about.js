import { ImProfile as icon } from 'react-icons/im';

export default {
    name: 'about',
    title: 'About Content',
    type: 'document',
    icon,
    fields: [
        { 
            name: 'title', 
            title: 'Title', 
            type: 'string' 
        },
        { 
            name: 'image', 
            title: 'Image', 
            type: 'image',
            options: {
                hotspot: true
            }
        },
        { 
            name: 'imgAlt', 
            title: 'Alternative text for Image', 
            type: 'string' 
        },
        { 
            name: 'content', 
            title: 'Content', 
            type: 'array',
            of: [
                {
                    type: 'block',
                },
            ]

        },
        { 
            name: 'navTitle', 
            title: 'Title for Navigation Link', 
            type: 'string' 
        },
        { 
            name: 'navLink', 
            title: 'Link for About Page Navigation', 
            type: 'string' 
        },
    ],
  }