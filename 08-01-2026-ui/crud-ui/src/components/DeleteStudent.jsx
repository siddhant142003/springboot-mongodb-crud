import React, { useState } from "react";
import { deleteStudent } from "../services/studentService";

function DeleteStudent() {
    const [id, setId] = useState("");

    const handleDelete = async () => {
        if (!id) {
            alert("Please enter student ID");
            return;
        }

        try {
            await deleteStudent(id);
            alert("Student deleted successfully");
            setId("");
        } catch (error) {
            console.error(error);
            alert("Failed to delete student");
        }
    };

    return (
        <div>
            <h3>Delete Student</h3>

            <input
                placeholder="Student ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />

            <button className="delete" onClick={handleDelete}>
                Delete
            </button>
        </div>
    );
}

export default DeleteStudent;