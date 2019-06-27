import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../../../core/components/modules/Button';
import { doSelectUser } from '../../../actions';
import { doShowModal } from '../../../../ui/actions';
import { getUsers } from '../../../selectors';
import './index.scss';

export const UserTable = ({ users, onSelectUser, onShowModal }) => {
  const onClick = user => {
    onSelectUser(user);
    onShowModal();
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th className="user-table__title">Nome</th>
          <th className="user-table__title">Usuário</th>
          <th className="user-table__title">Email</th>
          <th className="user-table__title">Ações</th>
        </tr>
      </thead>
      <tbody>
        {users.length ? (
          users.map(user => (
            <tr key={user.id}>
              <td className="user-table__item">{user.name}</td>
              <td className="user-table__item">{user.username}</td>
              <td className="user-table__item">{user.email}</td>
              <td className="user-table__item">
                <Button type="danger" onClick={() => onClick(user)}>
                  Remover
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4" className="user-table__item user-table__item--centered">
              Nenhum usuário encontrado.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  onSelectUser: PropTypes.func.isRequired,
  onShowModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  users: getUsers(state),
});

const mapDispatchToProps = {
  onSelectUser: doSelectUser,
  onShowModal: doShowModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserTable);
