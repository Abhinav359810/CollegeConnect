// college.js
const express = require('express');
const { addCollege, getColleges } = require('../controllers/collegeController');
const checkUserRole = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/add', checkUserRole(['admin']), addCollege);
router.get('/', checkUserRole(['admin', 'teacher']), getColleges);

module.exports = router;