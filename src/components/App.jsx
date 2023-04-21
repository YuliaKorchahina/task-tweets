import { Routes, Route } from 'react-router-dom';
import NavbarMenu from '../Pages/NavBar';
import Home from 'Pages/Home';
import Tweets from 'Pages/Tweets';

export const App = () => {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
      </Routes>
    </>
  );
};
