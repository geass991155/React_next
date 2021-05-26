import Link from "next/link";
import styles from "./articleOuter.module.scss";
import useTranslation from "../i18n/useTransition";
import FontSize from "../fontSize";
import getBreadcrumbs from "./getBreadcrumbs";
import { useRouter } from "next/router";

const Breadcrumbs = () => {
  const {
    t,
    i18n: { language: lang },
  } = useTranslation("common");
  const { asPath, query } = useRouter();

  const paths = getBreadcrumbs({
    asPath,
    query,
    t,
    lang,
  });

  const home = [
    {
      href: { pathname: "/[lang]", query: { lang } },
      as: `/${lang}`,
      title: t("home"),
      isHome: true
    },
  ];

  return (
    <nav className={styles.breadcrumbs}>
      {home.concat(paths).map((e, i) => {
        if (typeof e === "string") {
          return (
            <FontSize key={`breadcrumbs-${i.toString()}`} Tag="span">
              {e}
            </FontSize>
          );
        }

        return (
          <Link
            key={`breadcrumbs-${i.toString()}`}
            href={e.href}
            as={e.isHome ? e.as : e.href}
            prefetch={false}
            passHref
          >
            <FontSize Tag="a" title={e.title}>
              {e.title}
            </FontSize>
          </Link>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
