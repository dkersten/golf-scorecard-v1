// components
import Modal from 'react-bootstrap/Modal'

// assets
import { ReactComponent as CloseIcon } from '../Assets/Icons/close-icon.svg'

// data
import scores from '../Temp Data/scoresData'
import Scorecard from './Scorecard'

const ResuableModal = (props) => {

  const renderScorecard = () => {
    let scoreObj = scores.scores.filter(item => item.roundId === props.scorecardId)
    scoreObj = scoreObj[0]

    return(
      <Scorecard
        date={scoreObj.date.full}
        holesPlayed={scoreObj.holesPlayed}
        score={scoreObj.score}
        course={scoreObj.course}
        stats={scoreObj.stats}
        holeByHole={scoreObj.holeByHole}
        advancedStats={scoreObj.advancedStats}
        holes={scoreObj.holes}
      />
    )
  }
  
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
        { props.type === "scorecard" ? renderScorecard() : null}
      </Modal.Body>
    </Modal>
  )
}

export default ResuableModal