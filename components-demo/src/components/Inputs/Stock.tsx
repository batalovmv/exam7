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
  stock: string;
  onSubmit: FormEventHandler;
};

const Stock = (props: Props) => {
  return (
    <>
      {" "}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>
          <input
            className="input"
            placeholder="Введите количество"
            type="number"
            value={props.stock}
            onChange={(e) => props.addData(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};
export default Stock;
