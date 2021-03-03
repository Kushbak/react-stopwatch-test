import './App.css'
import { useState, useEffect } from 'react'
import Timer from './components/Time'
import Checkpoints from './components/Checkpoints'

function App() {
    const [isPlay, setPlay] = useState(false)
    const [time, setTime] = useState(0)
    const [startTime, setStartTime] = useState(0)
    const [checkpoints, setCheckpoints] = useState([])

    const startStopwatch = () => {
        setPlay(true)
    }
    
    const stopStopwatch = () => {
        setStartTime(time)
        setPlay(false)
    }

    const setCheckpoint = () => {
        let checkpointsArr = checkpoints
        checkpoints.push(time)
        setCheckpoints(checkpointsArr)
    }

    const resetStopwatch = () => {
        setPlay(false)
        setStartTime(0)
        setTime(0)
        setCheckpoints([])
    }

    useEffect(() => {
          if (!isPlay) return

          const intervalId = setInterval(() => {
            setTime((timestamp) => timestamp + 10)
          }, 10)
          
          return () => {
            clearInterval(intervalId);
          }
        },
        [isPlay]
      )

    return (
        <div className="App">
            <Timer time={time}/>
            <Checkpoints checkpoints={checkpoints}/>

            <div className='actions'>
                { (time !== 0 && !isPlay) && <button onClick={resetStopwatch}>Reset</button>  }
                {
                    isPlay
                        ? <button onClick={stopStopwatch}>Stop</button>
                        : <button onClick={startStopwatch}>Start</button>
                }
                <button onClick={setCheckpoint}>Checkpoint</button>
            </div>
        </div>
    )
}

export default App
