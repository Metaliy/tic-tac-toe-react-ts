import { useEffect } from "react"
import { computerTurnReducer, winnerReducer } from "app/store/slices/game-progress-slice/game-progress-slice";
import {  CELL_VALUE, GameResults, getRandomNumber, useAppDispatch, winningValues } from "shareds/config";
import { BoardCell } from "./board-cell";
import { checkNextTurnValues, checkWinner } from "entities/game/model/game";
import { ResetButton } from "./reset-button";

type GameBoardProps = {
  styles: CSSModuleClasses,
  availableValues: number[],
  userTurns: number[],
  computerTurns: number[],
  winner: {winnerName: string, winningCombo: number[]}
}

function GameBoard({styles, availableValues, userTurns, computerTurns, winner}: GameBoardProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const winner = availableValues.length <= 4 ? checkWinner(userTurns, computerTurns, availableValues, winningValues) : '';
    if(winner && winner.winnerName === GameResults.Computer) {
      dispatch(winnerReducer(winner))
    
    }
    if(winner && winner.winnerName === GameResults.User) {
      dispatch(winnerReducer(winner))
    
    }
    if(winner && winner.winnerName === GameResults.Draw) {
      dispatch(winnerReducer(winner))
    
    }

  }, [availableValues]);

  
  useEffect(() => {
    const userValues = checkNextTurnValues(userTurns, availableValues, winningValues, 1)
    const computerValues = checkNextTurnValues(computerTurns, availableValues, winningValues, 1)
    if(userTurns.length === 1){
      const randomNumber = Math.floor(Math.random() * (availableValues.length - 1)); 
        dispatch(computerTurnReducer(randomNumber))
      
      return
    }
    const winner = availableValues.length <= 4 ? checkWinner(userTurns, computerTurns, availableValues, winningValues) : '';
    if(userTurns.length >= 2 && !winner) {
      
        const computerTurn = computerValues.length === 1 ? computerValues[getRandomNumber(computerValues.length)] : userValues[getRandomNumber(userValues.length)]
        dispatch(computerTurnReducer(computerTurn === undefined ? getRandomNumber(availableValues.length) : availableValues.indexOf( computerTurn)))
      
    }


  }, [userTurns]);

  
  
  return (
    <>
    <div className={styles.container} >
      {CELL_VALUE.map((cell) => {
        if(cell.value!) {
          cell.value = '';
        }
        if(userTurns.includes(Number(cell.id))) {
          cell.value = 'cross' 
        }
        if(computerTurns.includes(Number(cell.id))) {
          cell.value = 'circle' 
        }
        const isDisabled = cell.value !== '' || winner.winnerName !== '' ? true : false
      return (
        
        <BoardCell winner={winner} key={cell.id} styles={styles} id={String(cell.id)} value={String(cell.value)} disabled={isDisabled} />
      )})}
      <ResetButton winner={winner.winnerName} styles={styles} disabled={false} />
    </div>
    
      </>
  )
}

export {GameBoard}
