import "./search-box.css";

const SearchBox = (props) => {
  const { onChangeHandler, className, placeholder } = props;
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
