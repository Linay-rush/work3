const currentDate = new Date()
const time = currentDate.toTimeString().slice(0,8)
const dates = currentDate.toLocaleDateString()
const date = dates.slice(-4)  + '-' + dates.slice(0,2) + '-' + dates.slice(3, 5)
module.exports = {
  date,
  time
}
