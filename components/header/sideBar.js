import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from './sideBar.module.scss';
import Link from "next/link";
import subMenu from "../submenu/subMenu.json";

const SideBar = ({ open }) => {
    const { pathname } = useRouter();

    const menu = subMenu['ch'].map((e) => {
      const className = pathname.indexOf(e.name + '/') !== -1 ? `${styles.active}` : "";
  
      return (
        <li>
          <Link
            href={{
              pathname: `${e.href}`,
              query: { lang: 'ch' },
            }}
            as={`${e.href}`}
            key={e.name}
            prefetch={false}
          >
            <a title={e.name} className={className}>
              {e.name}
            </a>
          </Link>
          <div className={styles.border}></div>
        </li>
      );
    });
    
    return (
        <div className={open ? styles.sidebar : styles.sidebarClose}>
          <nav>
            <ul>
              {menu}
            </ul>
          </nav>
        </div>
    );
  };
  
  export default SideBar;