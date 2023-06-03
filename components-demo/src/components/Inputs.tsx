import { MouseEventHandler, useState } from "react";
import Name from "./Inputs/Name";
import Price from "./Inputs/Price";
import Stock from "./Inputs/Stock";
type Props = {
  text: string;
  price: string;
  onRemoveHandler: MouseEventHandler<HTMLElement>;
};
const Inputs = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState(0);
  const changeName = (text: string) => {
    setName(text);
    console.log(name);
  };
  const changePrice = (text: string) => {
    setPrice(text);
    console.log(name);
  };
  const changeStock = (text: number) => {
    setStock(text);
    console.log(name);
  };
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Name onSubmit={onSubmit} addData={changeName} name={name} />{" "}
      <Price onSubmit={onSubmit} addData={changePrice} price={price} />
      <Stock onSubmit={onSubmit} addData={changeStock} stock={stock} />
      <button className="reduce-button" type="submit"></button>
    </>
  );
};
export default Inputs;
