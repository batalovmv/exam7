import { MouseEventHandler, useState } from "react";
import Name from "./Inputs/Name";
import Price from "./Inputs/Price";
import Stock from "./Inputs/Stock";
type Props = {
  addNewItem: any;
};
const Inputs = (props: Props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [item, setItem] = useState({});
  const changeName = (text: string) => {
    setName(text);
    console.log(name);
  };
  const changePrice = (text: number) => {
    setPrice(text);
    console.log(price);
  };
  const changeStock = (text: number) => {
    setStock(text);
    console.log(stock);
  };
  // const makeNewItem = () => {
  //   const newItem = { name: name, price: price, stock: stock };
  //   setItem(newItem);
  // };
  const onSubmit = (event) => {
    event.preventDefault();
    // makeNewItem(name, price, stock);
  };
  const pushItem = () => {};
  return (
    <>
      Добавать новый продукт
      <Name onSubmit={onSubmit} addData={changeName} name={name} />
      <Price onSubmit={onSubmit} addData={changePrice} price={price} />
      <Stock onSubmit={onSubmit} addData={changeStock} stock={stock} />
      <button
        onSubmit={onSubmit}
        onClick={() => {
          props.addNewItem({ title: name, price: price, stock: stock });
        }}
        className="reduce-button"
        type="submit"
      ></button>
    </>
  );
};
export default Inputs;
