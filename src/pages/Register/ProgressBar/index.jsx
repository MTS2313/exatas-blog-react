import './styles.css'

function ProgressBar({index}){
    const progressBarWidth = (index * 33.333) + '%'
    return (
        <div className='progress-container'>
               <div className="bar-progress" style={{width: progressBarWidth}}></div>
               <div className="info">
                   <span className="progress">Progress</span>
                   <span className="progress-number">0{index} - 03</span>
               </div>
        </div>
    )
}

export default ProgressBar;