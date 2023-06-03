import { MouseEventHandler, useState } from "react";
import Name from "./Inputs/Name";
import Price from "./Inputs/Price";
import Stock from "./Inputs/Stock";
type Props = {
  addNewItem: any;
};
const Inputs = (props: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const changeName = (text: string) => {
    setName(text);
  };
  const changePrice = (text: string) => {
    if (Number(text) < 0) {
      alert("меньше нуля");
    } else {
      setPrice(text);
    }
  };
  const changeStock = (text: string) => {
    if (Number(text) < 0) {
      alert("меньше нуля");
    } else {
      setPrice(text);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  const clear = () => {
    setName("");
    setPrice("");
    setStock("");
  };

  return (
    <>
      Добавать новый продукт
      <Name onSubmit={onSubmit} addData={changeName} name={name} />
      <Price onSubmit={onSubmit} addData={changePrice} price={price} />
      <Stock onSubmit={onSubmit} addData={changeStock} stock={stock} />
      <button
        onSubmit={onSubmit}
        onClick={() => {
          clear();
          props.addNewItem({ title: name, price: price, stock: stock });
        }}
        className="add-button"
        type="submit"
      >
        Добавить
      </button>
    </>
  );
};
export default Inputs;
