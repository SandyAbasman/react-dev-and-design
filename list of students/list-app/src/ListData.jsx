import StudentComponent from "./StudentComponent.jsx";

function ListData() {
  const students = [
    {
      studentName: " Sandy Abasman",
      studentEmail: "sandy@gmail.com",
      studentScore: 47,
      studentID: " 564864",
    },
    {
      studentName: " lindsay lohan",
      studentEmail: "lindsay@gmail.com",
      studentScore: 77,
      studentID: "789474",
    },
    {
      studentName: "Rendy frank",
      studentEmail: "frank@gmail.com",
      studentScore: 82,
      studentID: "89874",
    },
  ];

  return (
    <div className="main-container">
      {students.map((student, index) => (
        <div key={index}>
          {student.studentScore > 20 ? (
            <StudentComponent
              studentName={student.studentName}
              studentEmail={student.studentEmail}
              studentID={student.studentID}
            />
          ) : (
            " "
          )}
        </div>
      ))}
    </div>
  );
}

export default ListData;
