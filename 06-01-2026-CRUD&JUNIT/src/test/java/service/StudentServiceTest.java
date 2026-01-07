package com.example.crud.service;

import com.example.crud.model.Student;
import com.example.crud.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {

    @Mock
    private StudentRepository studentRepository;

    @InjectMocks
    private StudentService studentService;

    @Test
    void testAddStudent() {
        Student student = new Student(null, "Siddhant", 22, "IT");

        when(studentRepository.save(student)).thenReturn(student);

        Student result = studentService.addStudent(student);

        assertNotNull(result);
        assertEquals("Siddhant", result.getName());
        verify(studentRepository, times(1)).save(student);
    }

    @Test
    void testGetAllStudents() {
        when(studentRepository.findAll())
                .thenReturn(List.of(new Student(), new Student()));

        List<Student> students = studentService.getAllStudents();

        assertEquals(2, students.size());
    }
}
