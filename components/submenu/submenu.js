import React from "react";
import { useRouter } from "next/router";
import styles from "./submenu.module.scss";
import Link from "next/link";
import subMenu from "./subMenu.json";

const Submenu = () => {
  const { pathname } = useRouter();
console.log(pathname);
  const menu = subMenu['ch'].map((e) => {
    const className = pathname.indexOf(e.name + '/') !== -1 ? `${styles.active}` : "";

    return (
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
    );
  });

  return (
    <div className={styles.submenuWrapper}>
      <nav className={styles.submenu}>{menu}</nav>
    </div>
  );
};

export default Submenu;
