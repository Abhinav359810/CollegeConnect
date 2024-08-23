// course.js
const express = require('express');
const { addCourse, getCourses } = require('../controllers/courseController');
const checkUserRole = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/add', checkUserRole(['teacher']), addCourse);
router.get('/', checkUserRole(['admin', 'teacher', 'student']), getCourses);

module.exports = router;