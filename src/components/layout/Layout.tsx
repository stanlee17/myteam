import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <Fragment>
      <Header />
      {/* Wrap all content in column-direction flexbox */}
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
