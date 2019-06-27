import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUsers } from '../../../selectors';
import './index.scss';

export const UserTable = ({ users }) => (
  <table className="user-table">
    <thead>
      <tr>
        <th className="user-table__title">ID</th>
        <th className="user-table__title">Nome</th>
        <th className="user-table__title">Usuário</th>
        <th className="user-table__title">Email</th>
      </tr>
    </thead>
    <tbody>
      {users.length ? (
        users.map(user => (
          <tr key={user.id}>
            <td className="user-table__item">{user.id}</td>
            <td className="user-table__item">{user.name}</td>
            <td className="user-table__item">{user.username}</td>
            <td className="user-table__item">{user.email}</td>
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

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  users: getUsers(state),
});

export default connect(mapStateToProps)(UserTable);
