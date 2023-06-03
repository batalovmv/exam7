import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  FormEventHandler,
  useState,
} from "react";
type Props = {
  addData: any;
  name: string;
  onSubmit: FormEventHandler;
};
const Name = (props: Props) => {
  const [name, setName] = useState("");
  return (
    <>
      {" "}
      <form onSubmit={(e) => props.onSubmit(e)}>
        <label>
          Enter your name:
          <input
            type="text"
            value={props.name}
            onChange={(e) => props.addData(e.target.value)}
          />
        </label>
      </form>
      )
    </>
  );
};
export default Name;
