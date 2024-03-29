import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  FormEventHandler,
  useState,
} from "react";
type Props = {
  addData: any;
  price: string;
  onSubmit: FormEventHandler;
};
const Price = (props: Props) => {
  return (
    <>
      {" "}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>
          <input
            className="input"
            placeholder="Введите цену продукта :"
            type="number"
            value={props.price}
            onChange={(e) => props.addData(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};
export default Price;
