import Card from "./card.component";

import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <ul className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </ul>
  );
};

export default CardList;
