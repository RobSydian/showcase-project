import classes from "./modal.module.css";
import { ImCross } from "react-icons/im";

export default function ModalContent({
  show,
  onClose,
  title,
  content,
  accept,
  cancel,
}) {
  return show ? (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <div className={classes.modal__header}>
          <h1>{title}</h1>
          <h1 onClick={onClose}>
            <ImCross />
          </h1>
        </div>
        <div className={classes.modal__body}>
          <p>{content}</p>
        </div>
        <div className={classes.modal__footer}>
          {accept && (
            <button className={classes.modal__accept_btn}>{accept}</button>
          )}
          {cancel && (
            <button onClick={onClose} className={classes.modal__cancel_btn}>
              {cancel}
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
}
