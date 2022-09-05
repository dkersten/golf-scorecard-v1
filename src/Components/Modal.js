// components
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

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
        {props.scorecard}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Body>
    </Modal>
  )
}

export default ResuableModal