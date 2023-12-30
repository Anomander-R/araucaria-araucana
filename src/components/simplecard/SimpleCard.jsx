import "./simplecard.scss";

const SimpleCard = ({card}) => {

  return (
  <div className={`card card__top_${card.color}`}>
    <h2>{card.title}</h2>
    <p>{card.bodyText}</p>
    <img src={card.imgUrl} alt={`illustration ${card.title}`} className="card__image"/>
    </div>
    );
};

export default SimpleCard;
