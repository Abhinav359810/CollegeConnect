// courseController.js
const { db } = require('../config/firebaseConfig');

// Add a new course
exports.addCourse = async (req, res) => {
  const { title, description, collegeId } = req.body;

  try {
    const newCourse = {
      title,
      description,
      collegeId,
      createdAt: new Date().toISOString(),
    };

    const courseDoc = await db.collection('courses').add(newCourse);

    res.status(201).json({ message: 'Course added successfully', id: courseDoc.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const coursesSnapshot = await db.collection('courses').get();
    const courses = coursesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};