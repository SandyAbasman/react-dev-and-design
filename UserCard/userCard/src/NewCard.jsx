import PropTypes from "prop-types";

function NewCard({ gender }) {
  {
    return gender === "male" ? (
      <div>
        <h1>This person is a male</h1>
      </div>
    ) : gender === "female" ? (
      <div>
        <h1>This person is a female</h1>
      </div>
    ) : (
      <div>
        <h1>not valid </h1>
      </div>
    );
  }
}

NewCard.propTypes = {
  gender: PropTypes.string.isRequired,
};

export default NewCard;
