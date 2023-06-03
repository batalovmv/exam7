import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  FormEventHandler,
  useState,
} from "react";
type Props = {
  addData: any;
  price: number;
  onSubmit: FormEventHandler;
};
const Price = (props: Props) => {
  return (
    <>
      {" "}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>
          Введите цену продукта :
          <input
            type="text"
            value={props.price}
            onChange={(e) => props.addData(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};
export default Price;
