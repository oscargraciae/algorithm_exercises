function timeConversion(s) {
  const ampm = s.slice(-2)
  const timeArr = s.slice(0, -2).split(':')

  let hour = parseInt(timeArr[0])
  const min = timeArr[1]
  const sec = timeArr[2]
  
  if (ampm === 'AM' && hour == 12) {
    hour = 0
  }
  
  if (ampm === 'PM' && hour !== 12) {
    hour += 12
  }
  
  console.log(`${hour}:${min}:${sec}`)
  
  const hoursStr = hour.toString().padStart(2, "0");
  console.log(`${hoursStr}:${min}:${sec}`)
  
  
  return `${hour}:${min}:${sec}`
}

const time = '5:05:45AM'
timeConversion(time)