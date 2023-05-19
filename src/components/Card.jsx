import "./card.scss";

function Card({ image, title, description, technologies, link }) {
  return (
    <div className="card">
      <a href={link} className="image-container">
        <img src={"/images/" + image} alt="project image" />
        <div>check out</div>
      </a>
      <div className="text-container">
        <a href={link}>
          <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <div className="text-container-bottom">
          {technologies.map((technology, i) => {
            return <p key={i}>{technology}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
