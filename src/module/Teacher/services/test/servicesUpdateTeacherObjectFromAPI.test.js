import servicesUpdateTeacherObjectFromAPI from "../servicesUpdateTeacherObjectFromAPI";

const updateTeacher =  {
    id: "1",
    name: "a",
    subject: "b",
}

const newStudents = [
    { name: "a", class: "b" },
    { name: "a", class: "b" },
    { name: "a", class: "b" },
    { name: "", class: "" },
]

test("tested update teacher", () => {
    expect(servicesUpdateTeacherObjectFromAPI.updateTeacherObjectFromAPI(updateTeacher, newStudents)).toHaveProperty("id")
    expect(servicesUpdateTeacherObjectFromAPI.updateTeacherObjectFromAPI(updateTeacher, newStudents)).toHaveProperty("name", "a")
    expect(servicesUpdateTeacherObjectFromAPI.updateTeacherObjectFromAPI(updateTeacher, newStudents)).toHaveProperty("subject", "b")

  const students = servicesUpdateTeacherObjectFromAPI.updateTeacherObjectFromAPI(updateTeacher, newStudents)
    expect(students.students).not.toBe(newStudents)

    
})