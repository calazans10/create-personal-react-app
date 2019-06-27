import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../../../core/components/modules/Button';
import Modal from '../../../../ui/components/modules/Modal';
import { doRequestDeleteUser, doClearUser } from '../../../actions';
import { doHideModal } from '../../../../ui/actions';
import { getSelectedUser } from '../../../selectors';
import './index.scss';

export const UserModal = ({ user, onRequestDeleteUser, onClearUser, onHideModal }) => {
  const onCloseModal = () => {
    onClearUser();
    onHideModal();
  };

  return (
    <Modal onHideModal={onCloseModal}>
      <div className="user-modal">
        <h2 className="user-modal__title">Remover usuário</h2>
        <p className="user-modal__caption">
          Tem certeza que deseja remover o usuário <strong>{user.username}</strong>?
        </p>
        <div className="user-modal__actions">
          <Button onClick={onCloseModal}>Cancelar</Button>
          <Button type="danger" onClick={() => onRequestDeleteUser(user.id)}>
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
};

UserModal.propTypes = {
  user: PropTypes.object.isRequired,
  onRequestDeleteUser: PropTypes.func.isRequired,
  onClearUser: PropTypes.func.isRequired,
  onHideModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: getSelectedUser(state),
});

const mapDispatchToProps = {
  onRequestDeleteUser: doRequestDeleteUser,
  onClearUser: doClearUser,
  onHideModal: doHideModal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
