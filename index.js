
const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
  ] 

// //   returns a year the KC Chiefs won the superbowl
//   function superbowlWin(record) {
//     let yearWon = record.find(record => record.result === "W");
//     return yearWon ? yearWon.year : undefined;
//   }


function superbowlWin(record) {
    let winningYear = record.find(record => record.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
