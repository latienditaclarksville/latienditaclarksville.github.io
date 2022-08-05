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
    <div>
      <ul className='flex 
                     flex-col
                    '>
        {
          navLinkTitles.map(link => {
            const { linkTarget, linkText } = link;
            return (
              <Link to={linkTarget} 
                    className='link 
                               link-hover 
                               sm:text-lg
                               underline-offset-4
                             decoration-rose-300
                               py-1.5
                               text-left
                              '>
                {linkText}
              </Link>
            );
          })
        }
      </ul>
    </div>
  );
}

export default NavList;