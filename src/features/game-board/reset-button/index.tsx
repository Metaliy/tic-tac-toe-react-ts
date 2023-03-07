import { resetGame } from "app/store/slices/game-progress-slice/game-progress-slice";
import { useAppDispatch } from "shareds/config";

type BoardCellProps = {
  styles: CSSModuleClasses,
  disabled: boolean,
  winner: string
}

function ResetButton({styles, disabled, winner}: BoardCellProps): JSX.Element {
  const dispatch = useAppDispatch();

  const buttonStyles = winner === '' ? styles.cell : `${styles.cell} ${styles.resetButtonBacklight}`


  return (
    <button onClick={() => dispatch(resetGame())} className={buttonStyles} disabled={disabled}><img src="src\shareds\img\reboot.svg"/></button>
  )
}

export {ResetButton}