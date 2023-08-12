import React from 'react'
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text' 
  },

  {
    title: 'Skills',
    path: '/skills',
    icon: <GiIcons.GiSkills />,
    cName: 'nav-text' 
  },

  {
    title: 'Projects',
    path: '/projects',
    icon: <AiIcons.AiFillProject />,
    cName: 'nav-text' 
  },

  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoIosContact />,
    cName: 'nav-text' 
  },
]
