import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <Fragment>
      {/* Wrap all content in column-direction flexbox */}
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Layout;
