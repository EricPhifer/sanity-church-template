import { GiNinjaHeroicStance as icon } from 'react-icons/gi';

export default {
name: 'home',
title: 'Homepage',
type: 'document',
icon,
fields: [
    { 
      name: 'welcometitle', 
      title: 'Welcome', 
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
      name: 'mainalt', 
      title: 'Alternative text for Main Image', 
      type: 'string' 
    },
    { 
      name: 'invitation', 
      title: 'Invitation', 
      type: 'array',
      of: [
        { type: 'block'},
      ] 
    },
    { 
      name: 'content', 
      title: 'Content', 
      type: 'array',
      of: [
        { type: 'block'},
      ] 
    },
  ],
}