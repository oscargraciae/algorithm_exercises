// const year = 1985
// const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

// const year = 2022
// const holidays = ['01/06', '04/01', '12/25'] 

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

function countHours(year, holidays) {
  return holidays.reduce((acc, item) => {
  	const day = new Date(`${item}/${year}`).getDay()
    
    if (day !== 6 && day !== 0) {
      return acc + 2
    }
    
    return acc
  }, 0)
}


countHours(year, holidays)
