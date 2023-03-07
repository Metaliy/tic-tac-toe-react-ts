import { userTurnReducer } from "app/store/slices/game-progress-slice/game-progress-slice";
import { Circle } from "entities/game/ui/board-cell/circle"
import { Cross } from "entities/game/ui/board-cell/cross"
import { GameResults, useAppDispatch } from "shareds/config";

type BoardCellProps = {
  id: string,
  value: string,
  styles: CSSModuleClasses,
  disabled: boolean,
  winner: {winnerName: string, winningCombo: number[]}
}

function BoardCell({id, value, styles, disabled, winner}: BoardCellProps): JSX.Element {
  const dispatch = useAppDispatch();

  let cellStyles = styles.cell;

  const setUserTurn = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if(evt.currentTarget.disabled) {
      return
    }
    dispatch(userTurnReducer(Number(evt.currentTarget.id)));
  }

  if(winner.winnerName === GameResults.Computer && winner.winningCombo.includes(Number(id))) {
    const numberOfWinningCombo = winner.winningCombo.indexOf(Number(id))
    cellStyles = `${styles.cell} computerWinBacklight_${numberOfWinningCombo}`
  }
  
  if(winner.winnerName === GameResults.User && winner.winningCombo.includes(Number(id))) {
    const numberOfWinningCombo = winner.winningCombo.indexOf(Number(id))
    cellStyles = `${styles.cell} userWinBacklight_${numberOfWinningCombo}`
  }

  let image = <></>

  if(value === 'cross') {
    image = <Cross styles={styles} />
  }

  if(value === 'circle') {
    image = <Circle styles={styles} />
  }


  return (
    <button onClick={(evt) => setUserTurn(evt)} id={id} className={cellStyles} disabled={disabled}>{image}</button>
  )
}

export {BoardCell}