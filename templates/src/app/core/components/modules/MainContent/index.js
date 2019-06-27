import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '../../../../ui/components/modules/Snackbar';
import './index.scss';

const MainContent = ({ title, children }) => (
  <>
    <Snackbar />
    <main className="main-content">
      {title && <h1 className="main-content__title">{title}</h1>}
      {children}
    </main>
  </>
);

MainContent.defaultProps = {
  title: '',
};

MainContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MainContent;
