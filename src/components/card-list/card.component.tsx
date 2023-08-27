import "./card.styles.css";
import { Monster } from "../../App";
type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { name, id, email } = monster;

  return (
    <li className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} alt={name} />
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Card;
