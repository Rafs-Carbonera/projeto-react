import styles from "./Lista.module.css";
import Item from "./Item";

function Lista() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul className={styles.listaContainer}>
        <Item dog="Moana" />
        <Item dog="Léia" />
        <Item dog="Meg" />
      </ul>
    </>
  );
}

export default Lista;
