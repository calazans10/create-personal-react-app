import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserTable from '../../modules/UserTable';
import UserModal from '../../modules/UserModal';
import MainHeader from '../../../../core/components/modules/MainHeader';
import MainContent from '../../../../core/components/modules/MainContent';
import { doRequestGetUsers } from '../../../actions';

export const UserList = ({ onRequestGetUsers }) => {
  useEffect(() => {
    onRequestGetUsers();
  }, [onRequestGetUsers]);

  return (
    <>
      <MainHeader />
      <MainContent title="Listagem de Usuários">
        <UserTable />
      </MainContent>
      <UserModal />
    </>
  );
};

UserList.propTypes = {
  onRequestGetUsers: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onRequestGetUsers: doRequestGetUsers,
};

export default connect(
  null,
  mapDispatchToProps
)(UserList);
