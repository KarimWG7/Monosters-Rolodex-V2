import { ChangeEventHandler } from "react";
import "./search-box.css";
// const func:(a:string, b:string, c:number) => void = (a, b, c) => {
// }
//NOTE: if you type an interface with a declared name before it will combone the two of them
type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  //NOTE: this means that it's a react component that will recieve an html input element so the greater than and smaller than signs is for inputing something into something
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};
// interface IChangehandler {
// }
// type SearchBox = {
//   classname: string;
//   placeholder: string;
//   onChangeHandler: (a: string) => void;
// };

// type CanadianAddress = {
//   street: string;
//   province: string;
// };
// type USAdrress = {
//   street: string;
//   state: string;
// };

//NOTE: this is called union types
// type NorthAmericanAddress = CanadianAddress | USAdrress;

// const karimAddress: NorthAmericanAddress = {
//   street: "Ibreaheim Gahnem Street",
//   province: "",
//   state: "",
// };

const SearchBox = ({
  onChangeHandler,
  className,
  placeholder,
}: SearchBoxProps) => {
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
