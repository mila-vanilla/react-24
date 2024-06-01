import { createPortal } from 'react-dom'

const STYLES = {
  position: 'fixed',
  inset: 0,
  height: '100vh',
  width: '100vw',
  background: 'grey',
  opacity: 0.5
}

export const Modal = ({ onChange }) => {
  return <>
    { createPortal(
      <div>
        <div style={ { ...STYLES } }
             onClick={ onChange }>
        </div>
        <div style={ { position: 'absolute', top: '100px', background: 'white' } }>
          hi
        </div>
      </div>, document.getElementById('modal-root'))
    }
  </>
}
