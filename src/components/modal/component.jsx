import { createPortal } from 'react-dom'
import styles from './modal.module.css'

export const Modal = ({ onClose, children }) => {
  return <>
    { createPortal(
      <div>
        <div className={ styles.backdrop }
             onClick={ onClose }>
        </div>
        <div className={ styles.modal }>
          { children }
        </div>
      </div>, document.getElementById('modal-root'))
    }
  </>
}
