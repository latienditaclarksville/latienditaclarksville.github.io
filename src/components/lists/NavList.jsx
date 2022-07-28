import React from 'react';
import { Link } from 'gatsby';

const NavList = () => {
  const navLinkTitles = [
    { linkTarget: '#AboutUs',  linkText: 'About Us'},
    { linkTarget: '#Features', linkText: 'Why Us'},
    { linkTarget: '#Photos',   linkText: 'Peek Inside'},
    { linkTarget: '#FAQ',      linkText: 'FAQs'},
    { linkTarget: '#Policy',   linkText: 'Policies'},
  ];

  return (
    <ul>
      {
        navLinkTitles.map(link => {
          const { linkTarget, linkText } = link;
          return (
            <Link to={linkTarget}>{linkText}</Link>
          );
        })
      }
    </ul>
  );
}

export default NavList;