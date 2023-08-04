import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      {/* Wrap all content in column-direction flexbox */}
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
