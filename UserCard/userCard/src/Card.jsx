import PropTypes from "prop-types";

function Card(prop) {
  return (
    <div className="main-card-container">
      <div className="profile-picture-container"></div>
      <div className="details-container">
        <p className="small-detail-container">
          <span>Name</span>
          {prop.name}
        </p>
        <p className="small-detail-container new">
          <span>Age</span>
          {prop.age}
        </p>
        <p className="small-detail-container">
          <span>Occupation</span>
          {prop.occupation}
        </p>
      </div>
    </div>
  );
}

Card.protypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  occupation: PropTypes.string.isRequired,
};

export default Card;
