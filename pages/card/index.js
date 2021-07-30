import React from 'react'
import Card from '../../components/Card/Card.js'
import styles from '../../components/Card/photoList.module.scss';
import { useRouter } from "next/router";
import Submenu from '../../components/submenu/submenu';
import Main from '../../components/main/main';

export const content = [
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" },  
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" }, 
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" },
];

const firstpage = ({ data }) => {
  const { asPath, query } = useRouter();

  const items = content.map((e, index) => (
    <Card
      src={`${e.title}`}
      subject={e.title}
      isAside
      isOut
    />
  ));
  
  return(
    <>
      <Submenu />
      <Main>
          {items}
      </Main>
    </>
  )
}

export default firstpage;


// export async function getStaticProps() {
//   const url = `${process.env.API_HOST}/api/v1/activity`;
//   const res = await fetch(url);
//   const { data:news } = await res.json();
  
//   return {
//     props: { data:news },
//     revalidate: 1,
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [{ params: { lang: "ch" } }],
//     fallback: false,
//   };
// }
