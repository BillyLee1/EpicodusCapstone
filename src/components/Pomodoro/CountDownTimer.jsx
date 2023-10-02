import { useState, useEffect } from 'react'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00'
}


const CountdownTimer = ({ countdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
        updateRemainingTime();
    }, 1000);
    return () => clearInterval(intervalId)
  }, [])

  function updateRemainingTime(countdown) {

  }

  return(
    <div>
      <h1>Pomodoro Timer</h1>
      <span>{ remainingTime.minutes }</span>
      <span>mins</span>
      <span>{ remainingTime.seconds }</span>
      <span>seconds</span>
    </div>
  )
}

export default CountdownTimer;
