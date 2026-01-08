import React, { useState } from "react";
import { updateStudent } from "../services/studentService";

function UpdateStudent() {
    const [id, setId] = useState("");
    const [student, setStudent] = useState({
        name: "",
        age: 0,
        department: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setStudent({
            ...student,
            [name]: name === "age" ? Number(value) : value,
        });
    };

    const handleUpdate = async () => {
        if (!id) {
            alert("Please enter student ID");
            return;
        }

        try {
            await updateStudent(id, {
                ...student,
                age: Number(student.age),
            });
            alert("Student updated successfully");
            setId("");
            setStudent({ name: "", age: "", department: "" });
        } catch (error) {
            console.error(error);
            alert("Failed to update student");
        }
    };

    return (
        <div>
            <h3>Update Student</h3>

            <input
                placeholder="Student ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <input
                name="name"
                placeholder="Name"
                value={student.name}
                onChange={handleChange}
            />

            <input
                name="age"
                type="number"
                placeholder="Age"
                value={student.age}
                onChange={handleChange}
            />

            <input
                name="department"
                placeholder="Department"
                value={student.department}
                onChange={handleChange}
            />

            <button className="update" onClick={handleUpdate}>
                Update
            </button>
        </div>
    );
}

export default UpdateStudent;