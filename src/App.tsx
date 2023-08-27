import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/Search-box/searchBox.component";

import "./App.css";
import { getData } from "./utils/data.utils";

//NOTE: this is called a genericwe can can pass it to a function to specify the data returned from it
export type Monster = {
  name: string;
  id: string;
  email: string;
};

const App = () => {
  let [monsters, setMonsters] = useState<Monster[]>([]);
  let [searchFeild, setSearchFeild] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const gettingUsers = async () => {
    try {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    gettingUsers();
    console.log("first effect");
  }, []);

  useEffect(() => {
    setFilteredMonsters((prev) => {
      const filter = monsters.filter((mon) =>
        mon.name.toLocaleLowerCase().includes(searchFeild)
      );
      return filter;
    });
  }, [searchFeild, monsters]);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
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
