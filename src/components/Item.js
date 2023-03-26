import style from "./Lista.module.css";

function Item({ dog }) {
  return (
    <>
      <li className={style.listaContent}>{dog}</li>
    </>
  );
}

export default Item;
