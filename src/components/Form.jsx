import { useEffect, useState } from 'react';

function Form({ addStudent }) {
  const [fullname, setFullname] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('Male');
  const [programStudy, setProgramStudy] = useState('Ekonomi');
  const [faculty, setFaculty] = useState('');

  useEffect(() => {
    getFaculty(programStudy);
  }, [programStudy]);

  const addNewStudent = () => {
    const newStudent = {
      fullname,
      birthDate,
      gender,
      programStudy,
      faculty,
    };

    fetch('http://localhost:3001/student', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then((response) => response.json())
      .then((data) => {
        addStudent(data);
        console.log(data);

        resetForm();
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const faculty = getFaculty(programStudy);
    addNewStudent();
  };

  const getFaculty = (programStudy) => {
    switch (programStudy) {
      case 'Ekonomi':
      case 'Manajemen':
      case 'Akuntansi':
        setFaculty('Fakultas Ekonomi');
        break;
      case 'Administrasi Publik':
      case 'Administrasi Bisnis':
      case 'Hubungan Internasional':
        setFaculty('fakultas Ilmu Sosial dan Politik');
        break;
      case 'Teknik Sipil':
      case 'Arsitektur':
        setFaculty('Fakultas Teknik');
        break;
      case 'Matematika':
      case 'Fisika':
      case 'Informatika':
        setFaculty('Fakultas Teknologi Informasi dan Sains');
        break;
      default:
        setFaculty('');
    }
  };

  const resetForm = () => {
    setFullname('');
    setBirthDate('');
    setGender('Male');
    setProgramStudy('Ekonomi');
  };

  return (
    <form id='form-student' onSubmit={handleSubmit}>
      <div>
        <label htmlFor='input-name'>Fullname</label>
        <input type='text' id='input-name' data-testid='name' value={fullname} onChange={(e) => setFullname(e.target.value)} />
      </div>
      <div>
        <label htmlFor='input-date'>Birth Date</label>
        <input type='date' id='input-date' data-testid='date' value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor='input-gender'>Gender</label>
        <select id='input-gender' data-testid='gender' value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
      </div>
      <div>
        <label htmlFor='input-prody'>Program Study</label>
        <select id='input-prody' data-testid='prody' value={programStudy} onChange={(e) => setProgramStudy(e.target.value)}>
          <option value='Ekonomi'>Ekonomi</option>
          <option value='Manajemen'>Manajemen</option>
          <option value='Akuntansi'>Akuntansi</option>
          <option value='Administrasi Publik'>Administrasi Publik</option>
          <option value='Administrasi Bisnis'>Administrasi Bisnis</option>
          <option value='Hubungan Internasional'>Hubungan Internasional</option>
          <option value='Teknik Sipil'>Teknik Sipil</option>
          <option value='Arsitektur'>Arsitektur</option>
          <option value='Matematika'>Matematika</option>
          <option value='Fisika'>Fisika</option>
          <option value='Informatika'>Informatika</option>
        </select>
      </div>
      <input type='submit' value='Add student' id='add-btn' data-testid='submit' />
    </form>
  );
}

export default Form;
