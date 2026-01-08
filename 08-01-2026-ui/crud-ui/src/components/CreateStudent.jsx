import React, { useState } from "react";
import { createStudent } from "../services/studentService";

function CreateStudent() {
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

    const handleSubmit = async () => {
        try {
            await createStudent({
                ...student,
                age: Number(student.age),
            });
            alert("Student created successfully");
            setStudent({ name: "", age: "", department: "" });
        } catch (err) {
            console.error(err);
            alert("Failed to create student");
        }
    };

    return (
        <div>
            <h3>Create Student</h3>

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

            <button className="create" onClick={handleSubmit}>
                Create
            </button>
        </div>
    );
}

export default CreateStudent;