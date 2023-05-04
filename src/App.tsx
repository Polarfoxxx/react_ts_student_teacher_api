import React from "react"
import "./App.css";
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Container } from './module/Container';
import { LoginPage } from './module/Log';
import { Content, Home } from "./module/Content";
import { Students, StudentsHome, CreateStudents, StudentsALL, UpdateStudents } from "./module/Student.module";
import { Teacher, TeacherHome, CreateTeacher, TeacherALL, TeachersByID, UpdateTeacher } from "./module/Teacher.module";



function App(): JSX.Element {
  const loginPG = useNavigate()

  /* useLayautEffect nefunguje zostane clear screen */
  React.useEffect(() => {
    localStorage.getItem("authenticationToken") === null ? loginPG("LoginPage") : loginPG("Content")
  }, [])

  return (
    <div className="App">
      <Container.Provider>
        <Routes>
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="Content/*" element={<Content />}>
            <Route path="" element={<Home />} />
            <Route path="Teacher/*" element={<Teacher />}>
              <Route path="" element={<TeacherHome />} />
              <Route path="CreateTeacher" element={<CreateTeacher />} />
              <Route path="TeacherALL" element={<TeacherALL />} />
              <Route path="TeachersByID" element={<TeachersByID />} />
              <Route path="UpdateTeacher" element={<UpdateTeacher />} />
            </Route>
            <Route path="Students/*" element={<Students />}>
              <Route path="" element={<StudentsHome />} />
              <Route path="CreateStudents" element={<CreateStudents />} />
              <Route path="StudentsALL" element={<StudentsALL />} />
              <Route path="UpdateStudents" element={<UpdateStudents />} />
            </Route>
          </Route>
        </Routes>
      </Container.Provider>
    </div>
  );
}

export default App;
