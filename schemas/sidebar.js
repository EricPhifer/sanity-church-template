import { AiOutlineInsurance as icon } from 'react-icons/ai';

export default {
    name: 'sidebar',
    title: 'Service Times',
    type: 'document',
    icon,
    fields: [
    {
      name: 'title', 
      title: 'Title of Service Category', 
      type: 'string',
    },
    {
      name: 'date', 
      title: 'Day & Time', 
      type: 'datetime',
    },
    {
      name: 'forwho', 
      title: 'Is this for kids, adults, etc.?', 
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
}