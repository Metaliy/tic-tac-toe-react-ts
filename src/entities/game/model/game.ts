import { GameResults } from "shareds/config";

export const checkNextTurnValues = (turnsValues: number[], availableTunrValues: number[], winningTurnsValues: number[][], requiredNumbersCount: number) => {
  const winningTurns: number[] = []
  winningTurnsValues.forEach((item) => {
  const requiredValues = item.filter(value => !turnsValues.includes(value));
  if(requiredValues.length === requiredNumbersCount && availableTunrValues.includes(requiredValues[0]) && requiredValues.includes(requiredValues[0])) {
    winningTurns.push(requiredValues[0])
  }
})
  return(winningTurns)
}

export const checkWinner = (userTurns: number[], computerTurns: number[], availableValues: number[], winningValues: number[][]) => {  
 
  const computerWinValues = winningValues.find(winningCombo => winningCombo.every(value => computerTurns.includes(value)));
  const userWinValues = winningValues.find(winningCombo => winningCombo.every(value => userTurns.includes(value)));
  
if (computerWinValues || userWinValues) {
  return computerWinValues ? {winningCombo: computerWinValues, winnerName: GameResults.Computer} : {winningCombo: userWinValues, winnerName: GameResults.User}
}

if(availableValues.length === 0) {
  return({winningCombo: [], winnerName: GameResults.Draw}) 
}   
  
}