import styles from "./styles.module.scss";
import { useAppSelector } from "shareds/config";
import { getAvailableValues, getComputerTurns, getUserTurns, getWinner } from "app/store/slices/game-progress-slice/selectors";
import { GameBoard } from "features/game-board";
import { Header } from "features/header";

function GamePage() {
  const availableValues = useAppSelector(getAvailableValues);
  const userTurns = useAppSelector(getUserTurns);
  const computerTurns = useAppSelector(getComputerTurns);
  const winner = useAppSelector(getWinner);
  

  return(
    <>
    <Header styles={styles} />
    <GameBoard
      styles={styles}
      availableValues={availableValues}
      userTurns={userTurns}
      computerTurns={computerTurns}
      winner={winner} />
    </>
  )
}

export {GamePage}
