import "./card.styles.css";

const Card = ({ monster }) => {
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
