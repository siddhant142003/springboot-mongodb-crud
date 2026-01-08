import React from "react";
import "./App.css";
import CreateStudent from "./components/CreateStudent";
import ReadStudents from "./components/ReadStudents";
import UpdateStudent from "./components/UpdateStudent";
import DeleteStudent from "./components/DeleteStudent";

function App() {
  return (
      <div className="container">
        <h1>🎓 Student Management System</h1>

        <div className="button-grid">
          <CreateStudent />
          <ReadStudents />
          <UpdateStudent />
          <DeleteStudent />
        </div>
      </div>
  );
}

export default App;