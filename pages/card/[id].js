import React from 'react'
import Card from '../../components/Card/Card.js'
import styles from '../../components/Card/photoList.module.scss';
import { useRouter } from "next/router";
import Submenu from '../../components/submenu/submenu';
import Main from '../../components/main/main';


const firstpage = ({ data }) => {
  const { asPath, query } = useRouter();
  return(
    <>
      <Submenu />
      <Main>
        <div className={styles.cardList}>
          <Card
            key={`string-${data.id}`}
            to={`${asPath}/${data.id}`}
            as={`${asPath}/${data.id}`}
            src={`${data.title}`}
            subject={data.title}
            isAside
            isOut
          />
        </div>
      </Main>
    </>
    
  )
}

export default firstpage;


export async function getStaticProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.API_HOST}/api/v1/activity/${params.id}`,
    );
    const { data } = await res.json();
    console.log(params);
    return {
      props: { data },
      revalidate: 1,
    };
  } catch (error) {
    return {
      props: { data: {} },
      revalidate: 1,
    };
  }
}

export async function getStaticPaths() {
  try {
    const res = await fetch(`${process.env.API_HOST}/api/v1/activity`);
    const { data } = await res.json();
    return {
      paths: data.map((e) => ({ params: { id: String(e.id), lang: 'ch' } })),
      fallback: true,
    };
  } catch (error) {
    return {
      paths: [{ params: { id: '1', lang: 'ch' } }],
      fallback: true,
    };
  }
}
