import React, { useEffect, useState } from "react";
import { getStudents } from "../services/studentService";

function ReadStudents() {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const data = await getStudents();
                setStudents(data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch students");
            }
        };

        fetchStudents();
    }, []);

    return (
        <div>
            <h3>Students</h3>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {students.length === 0 && !error ? (
                <p>No students found</p>
            ) : (
                <ul>
                    {students.map((s) => (
                        <li key={s._id}>
                            {s.name} - {s.department} - {s.age}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ReadStudents;