import { FormEventHandler } from "react";
type Props = {
  addData: any;
  name: string;
  onSubmit: FormEventHandler;
};
const Name = (props: Props) => {
  return (
    <>
      {" "}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>
          <input
            className="input"
            placeholder="Введите название :"
            type="text"
            value={props.name}
            onChange={(e) => props.addData(e.target.value)}
          />
        </label>
      </form>
    </>
  );
};
export default Name;
