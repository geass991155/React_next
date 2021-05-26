import getURL from "../../utils/getUrl";
import mainMenu from "../mainMenu/mainMenu.json";
import { pipe } from "../../utils/pipe";

const getLastIndex = (arr) => arr.length - 1;
const lastHref = (arr) => (length) => arr[length].href;
const getHrefArr = (arr) => arr.split("/");
const removeAttribute = (num) => (arr) => arr.slice(1, arr.length - num);

const getTopMenu = () => {
  return [
    {
      name: "calendar",
      href: "/calendar",
    },
    {
      name: "contact-us",
      href: "/contact-us",
    },
    {
      name: "sitemap",
      href: "/sitemap",
    },
  ];
};

const pathMatch = (target, arrPath) => {
  return target.every((path, i) => arrPath[i] === path);
};

export default function getBreadcrumbs({ asPath, query, t, lang }) {
  // 將網址分割成陣列，如果是內頁就去掉id那個位置
  let arrPath;

  arrPath = getURL(asPath);

  if (query.id) {
    arrPath = arrPath.split("/").slice(2, arrPath.split("/").length - 1);
  } else {
    arrPath = arrPath.split("/").slice(2, arrPath.split("/").length);
  }

  // 判斷menu是主選單還是top選單
  const topMenu = ["sitemap", "calendar", "contact-us"];
  let arrMenu = topMenu.includes(arrPath[getLastIndex(arrPath)])
    ? getTopMenu()
    : mainMenu[lang];

  // 處理志工招募的個資宣告(statement)跟簡章(brief)
  if (arrPath[0] === "volunteer" && arrPath[1] === "recruit") {
    arrPath = arrPath.slice(0, 2);
  }

  // 處理線上開展分類內頁
  if (arrPath[getLastIndex(arrPath)] === "online") {
    arrPath = ["online-art", "online-exhibition"];
  }

  if (lang === "en") {
    // 處理特殊情況，英文版的行政服務
    const isFile = pathMatch(
      ["services", "services", "file-download"],
      arrPath
    );

    const isLinks = pathMatch(
      ["services", "services", "related-links"],
      arrPath
    );

    const isAdministrative = pathMatch(
      ["services", "executive-info", "faq"],
      arrPath
    );

    if (isFile || isLinks || isAdministrative) {
      const { name } = mainMenu.en
        .find((e) => e.name === "services")
        .sub.find((e) => e.href === `/${arrPath[getLastIndex(arrPath)]}`);
      return [
        { href: `/en/services/file-download`, title: t("services") },
        t(name),
      ];
    }

    // 處理英文版的線上環景展覽
    const isOnlinePanoramicExhibition = pathMatch(
      ["online-art", "online-panoramic-exhibitions"],
      arrPath
    );

    if (isOnlinePanoramicExhibition) {
      return [
        {
          href: `/en/exhibitions/current-exhibitions`,
          title: t("exhibitions"),
        },
        t("on-line-360-exhibition"),
      ];
    }
  }

  const paths = arrPath.reduce(
    (p, path, i, array) => {
      const l = p.menu.find((e) => e.href === `/${path}`);

      if (i === array.length - 1) {
        return p.path.concat([t(l.name)]);
      }

      if (i === 0) {
        let href = `/${lang}${l.href}${l.sub[0].href}`;
        if (l.sub[0].sub) {
          href += l.sub[0].sub[0].href;
        }

        return {
          menu: l.sub || [],
          hasSub: l.sub[0].sub ? true : false,
          path: p.path.concat([
            {
              href,
              title: t(l.name),
            },
          ]),
        };
      }

      const num = p.hasSub ? 2 : 1;
      const arr = pipe(
        getLastIndex,
        lastHref(p.path),
        getHrefArr,
        removeAttribute(num)
      )(p.path);

      const newHref = [""].concat(arr).join("/");

      return {
        menu: l.sub || [],
        hasSub: l.sub[0].sub ? true : false,
        path: p.path.concat([
          {
            href: newHref + l.href + l.sub[0].href,
            title: t(l.name),
          },
        ]),
      };
    },
    { menu: arrMenu, path: [] }
  );

  return paths;
}
