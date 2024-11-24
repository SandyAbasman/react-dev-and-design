/* eslint-disable react/prop-types */

function StudentComponent({ studentName, studentEmail, studentID }) {
  return (
    <div className="student-container">
      <div className="left-content-section">
        <div className="student-name-container">
          <h1>Name:{studentName}</h1>
        </div>
        <div className="student-ID-container">
          <p> Email:{studentEmail}</p>
        </div>
      </div>

      <div className="right-content-section">
        <div className="student-Id-container">
          <p> ID:{studentID}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentComponent;
