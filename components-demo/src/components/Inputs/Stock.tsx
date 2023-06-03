import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  MouseEventHandler,
  useState,
} from "react";
type Props = {
  addData: any;
  stock: number;
  onSubmit: FormEventHandler;
};

const Stock = (props: Props) => {
  return (
    <>
      {" "}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>
          Введите имя продукта:
          <input
            type="text"
            value={props.stock}
            onChange={(e) => props.addData(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};
export default Stock;
