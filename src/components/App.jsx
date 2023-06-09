import { Routes, Route } from 'react-router-dom';
import NavbarMenu from '../Pages/NavBar';
import Home from 'Pages/Home';
import Tweets from 'Pages/Tweets';
import { Container } from './Container.style';
import { GlobalStyle } from './common_style/GlobalStyle';
import NotFound from 'Pages/NotFound';

export const App = () => {
  return (
    <>
      <NavbarMenu />
      <Container>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tweets" element={<Tweets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
