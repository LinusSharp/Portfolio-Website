"use client";

import React from "react";
import Link from "next/link";

const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  },
]

const Nav = () => {
  return <nav>
    {links.map((link, index)=> {
      return (
        <Link href={link.path} key={index}>
          {link.name}
        </Link>
      )
    })}
  </nav>;
};

export default Nav;
