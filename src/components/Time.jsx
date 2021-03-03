import { beautifyDate } from "../utils/beautifyDate"

const Timer = (props) => {
    let time = beautifyDate(props.time)
    
    return (
        <div className='timer'>
            <p>{time}</p>
        </div>
    )
}

export default Timer