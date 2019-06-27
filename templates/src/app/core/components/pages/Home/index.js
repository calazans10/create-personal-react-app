import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainHeader from '../../modules/MainHeader';
import MainContent from '../../modules/MainContent';
import { doRequestLoading } from '../../../../ui/actions';

export const Home = ({ onRequestLoading }) => {
  useEffect(() => {
    onRequestLoading();
  }, [onRequestLoading]);

  return (
    <>
      <MainHeader />
      <MainContent>
        <p>Bem-vindo ao Admin. Esta é a página do painel padrão.</p>
      </MainContent>
    </>
  );
};

Home.propTypes = {
  onRequestLoading: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRequestLoading: doRequestLoading,
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
