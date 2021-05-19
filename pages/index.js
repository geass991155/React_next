import React from 'react'
import Card from '../components/Card/Card.js'
import CardList from '../components/Card/Cardlist.js'
import FanCard from '../components/fanCard/fanCard.js'
import ScrollTop from '../components/scrollTop/scrollTop'
import { useRouter } from "next/router";
import Submenu from '../components/submenu/submenu';
import Main from '../components/main/main';

export const content = [
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" },  
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" }, 
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" },
];

export const fancontent = [
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字1", text: "測試用內容" }, 
];

const firstpage = ({ data }) => {
  const { asPath, query } = useRouter();
  console.log(asPath);

    const fanitems = data.map((e, index) => (
      <FanCard
        key={`${asPath}/${e.index}`}
        to={`card/${e.id}`}
        as={`card/${e.id}`}
        src={`${e.title}`}
        subject={e.title}
        isAside
      />
    ));

    const items = data.map((e, index) => (
      <Card
        key={`${asPath}/${e.index}`}
        to={`card/${e.id}`}
        as={`card/${e.id}`}
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
        <CardList>
          {items}
        </CardList>
        <CardList>
          {fanitems}
        </CardList>
        <ScrollTop />
      </Main>
    </>
  )
}

export default firstpage;


export async function getStaticProps() {
  const url = `${process.env.API_HOST}/api/v1/activity`;
  const res = await fetch(url);
  const { data:news } = await res.json();
  
  return {
    props: { data:news },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { lang: "ch" } }],
    fallback: false,
  };
}
