import servicesCreateTeacherObjectFromAPI from "../servicesCreateTeacherObjectFromAPI";

const newTeacher = {
    name: "a",
    subject: "b" 
}

const newStudents = [
    {name: "a", class: "b"},
    {name: "a", class: "b"},
    {name: "a", class: "b"},
    {name: "", class: ""},
]

test("create new object from CreateTecherAPI", () => {
    expect(servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(newTeacher, newStudents)).toHaveProperty("name", "a")
    expect(servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(newTeacher, newStudents)).toHaveProperty("subject", "b")
    expect(servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(newTeacher, newStudents)).toHaveProperty("students")
    expect(servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(newTeacher, newStudents)).toHaveProperty("students[2].name", "a")
    expect(servicesCreateTeacherObjectFromAPI.createTeacherObjectFromAPI(newTeacher, newStudents)).not.toHaveProperty("students[3].name", "a")
})
