import { Link } from "react-router-dom";

function Logo () {
  return(
    <Link to={"/"}><img src="../img/tic-tac-toe.svg"></img> </Link>
  )
}
export {Logo};
