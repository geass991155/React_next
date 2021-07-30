import React from 'react'
import Card from '../components/Card/Card.js'
import CardList from '../components/Card/Cardlist.js'
import FanCardList from '../components/fanCard/fanCardlist.js'
import FanCard from '../components/fanCard/fanCard.js'
import ScrollTop from '../components/scrollTop/scrollTop'
import { useRouter } from "next/router";
import Submenu from '../components/submenu/submenu';
import Main from '../components/main/main';
import Banner from '../components/Banner/Banner.js'
import HomeTitle from '../components/home/homeTitle.js'

export const content = [
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字2", text: "測試用內容" },  
  { title: "測試用文字3", text: "測試用內容" },
  { title: "測試用文字4", text: "測試用內容" }, 
  { title: "測試用文字5", text: "測試用內容" },
  { title: "測試用文字6", text: "測試用內容" },
];

export const fancontent = [
  { title: "測試用文字1", text: "測試用內容" },
  { title: "測試用文字2", text: "測試用內容" },
  { title: "測試用文字3", text: "測試用內容" }, 
  { title: "測試用文字4", text: "測試用內容" },
  { title: "測試用文字5", text: "測試用內容" },
  { title: "測試用文字6", text: "測試用內容" },
];

const firstpage = ({  }) => {
  const { asPath, query } = useRouter();

    const fanitems = content.map((e, index) => (
      <FanCard
        key={`${asPath}/${e.index}`}
        to={`card/${e.id}`}
        as={`card/${e.id}`}
        src={`${e.title}`}
        subject={e.title}
        isAside
        isOut
      />
    ));

    const items = fancontent.map((e, index) => (
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
      <main>
        <Banner/>
        <HomeTitle title={"新鮮的肝"}/>
        <CardList>
          {items}
        </CardList>
        <HomeTitle title={"地域入口"}/>
        <FanCardList>
          {fanitems}
        </FanCardList>
        <ScrollTop />
      </main>
    </>
  )
}

export default firstpage;

