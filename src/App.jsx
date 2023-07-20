import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/Search-box/searchBox.component";

import "./App.css";

const App = () => {
  let [monsters, setMonsters] = useState([]);
  let [searchFeild, setSearchFeild] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const gettingUsers = async () => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await data.json();
      setMonsters(users);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettingUsers();
    console.log("first effect")
  }, []);

  useEffect(() => {
    setFilteredMonsters((prev) => {
      const filter = monsters.filter((mon) =>
        mon.name.toLocaleLowerCase().includes(searchFeild)
      );
      return filter;
    });
  }, [searchFeild, monsters]);

  const onChangeHandler = (e) => {
    setSearchFeild((preState) => e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1 className="app-title">Monosters Rolodex</h1>
      <SearchBox
        onChangeHandler={onChangeHandler}
        placeholder="Search Monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
