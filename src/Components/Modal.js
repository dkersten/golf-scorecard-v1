// components
// import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

// assets
import { ReactComponent as CloseIcon } from '../Assets/Icons/close-icon.svg'

const ResuableModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body
        scrollable={true}
        style={{
        maxHeight: '500px',
        overflowY: 'auto'
        }}
      >
        <div className="modal-head">
            <button 
                aria-label='Close Modal'
                className='btn-close'
                onClick={props.onHide}
            >
                <CloseIcon />
            </button>
        </div>
        {props.scorecard}
      </Modal.Body>
    </Modal>
  )
}

export default ResuableModal