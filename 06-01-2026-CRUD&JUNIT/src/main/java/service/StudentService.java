package com.example.crud.service;

import com.example.crud.model.Student;
import com.example.crud.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repo;

    public StudentService(StudentRepository repo) {
        this.repo = repo;
    }

    public Student addStudent(Student student) {
        return repo.save(student);
    }

    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    public Student getStudentById(String id) {
        return repo.findById(id).orElse(null);
    }

    public Student updateStudent(String id, Student student) {
        Student existing = repo.findById(id).orElse(null);
        if (existing != null) {
            existing.setName(student.getName());
            existing.setAge(student.getAge());
            existing.setDepartment(student.getDepartment());
            return repo.save(existing);
        }
        return null;
    }

    public void deleteStudent(String id) {
        repo.deleteById(id);
    }
}
