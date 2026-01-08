const BASE_URL = "/api/students";

export const createStudent = async (student) => {
    const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
    });

    if (!response.ok) {
        throw new Error("Create student failed");
    }

    //Only parse JSON if response has a body
    const text = await response.text();
    return text ? JSON.parse(text) : null;
};

export const getStudents = async () => {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
        throw new Error("Fetch students failed");
    }

    return response.json();
};

export const updateStudent = async (id, student) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
    });

    if (!response.ok) {
        throw new Error("Update failed");
    }

    const text = await response.text();
    return text ? JSON.parse(text) : null;
};

export const deleteStudent = async (id) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Delete failed");
    }
};