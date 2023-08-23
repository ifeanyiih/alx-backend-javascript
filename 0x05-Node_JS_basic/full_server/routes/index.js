import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const express = require('express');

const router = express.Router();

export const homeRoute = router.get('/', (req, res) => {
  AppController.getHomepage(req, res);
});

export const studentsRoute = router.get('/students', (req, res) => {
  StudentsController.getAllStudents(req, res);
});

export const studentsMajorRoute = router.get('/students/:major', (req, res) => {
  StudentsController.getAllStudentsByMajor(req, res);
});
