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
  const [item, setItem] = useState({});
  const changeName = (text: string) => {
    setName(text);
    console.log(name);
  };
  const changePrice = (text: string) => {
    setPrice(text);
    console.log(price);
  };
  const changeStock = (text: string) => {
    setStock(text);
    console.log(stock);
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
        className="reduce-button"
        type="submit"
      ></button>
    </>
  );
};
export default Inputs;
