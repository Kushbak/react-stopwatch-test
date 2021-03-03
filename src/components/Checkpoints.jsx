import { beautifyDate } from "../utils/beautifyDate"

const Checkpoints = (props) => {
    return (
        <div className='checkpoints'>
            {
                props.checkpoints.map((item, index) => (
                    <div className="checkpoint">
                        <p>{index}</p>
                        <p>{beautifyDate(item)}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Checkpoints