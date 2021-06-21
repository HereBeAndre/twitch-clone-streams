const Modal = ({ title, content, actions, onModalDismiss }) => {
  return (
    <div onClick={onModalDismiss} className="ui modal active">
      <div className="header">{title}</div>
      <div className="content">{content}</div>
      <div className="actions">{actions}</div>
    </div>
  );
};

export default Modal;
