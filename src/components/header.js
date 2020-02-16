import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby'

//import './header.module.scss'
import headerStyles from './header.module.scss'

export default function Header() {

  const data = useStaticQuery(graphql`
    query {
        site {
            siteMetaData {
                author
            }
        }
    }
  `)

  return (
    <header className={headerStyles.header}>
        <h1>
            <Link className={headerStyles.title} to='/'>
                { data.site.siteMetaData.author }
            </Link>
        </h1>
        <nav>
            <ul className={headerStyles.navList}>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/about'>
                        oi
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>
                        blog
                    </Link>
                </li>
                <li>
                    <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>
                        contato
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}
