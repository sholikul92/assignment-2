const Table = (props) => {
  // TODO: answer here
  const { students, deleteStudent } = props;

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Full Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Faculty</th>
            <th>Program Study</th>
            <th>Option</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student, index) => {
            return (
              <tr key={student.id} className='student-data-row'>
                <td>{index + 1}</td>
                <td>{student.fullname}</td>
                <td>{student.birthDate}</td>
                <td>{student.gender}</td>
                <td>{student.faculty}</td>
                <td>{student.programStudy}</td>
                <td>
                  <button data-testid={'delete-' + student.id} onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
