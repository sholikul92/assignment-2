import { useEffect, useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';

const App = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3001/student')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      });
  }, []);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  if (loading) return <p>Loading ...</p>;

  return (
    <div className='App'>
      <h1>Student Portal</h1>
      <Form addStudent={addStudent} />
      <Table students={students} deleteStudent={deleteStudent} />
    </div>
  );
};

export default App;
