import PropTypes from 'prop-types';
import { Gotomain, Noscript, C } from '../accesskeys';
import Header from '../header';
import Wrapper from './wrapper';
import Main from './main';
import Footer from '../footer';
import { useRouter } from 'next/router';

/* import useHome from './useHome'; */

export default function Layout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  return (
    <>
      {/* 無障礙 */}
      <Gotomain />
      <Noscript />

      {/* Topmenu、Mainmenu 在 <Header> */}
      <Header />

      {isHome ? (
        <>
          <C />
          <Main>{children}</Main>
        </>
      ) : (
        <Wrapper>{children}</Wrapper>
      )}

      <Footer />
      {/* <ScrollTop> 在 <Footer> */}
    </>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired };
