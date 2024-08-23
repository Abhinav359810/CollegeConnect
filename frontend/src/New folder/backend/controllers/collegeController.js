// collegeController.js
const { db } = require('../config/firebaseConfig');

// Add a new college
exports.addCollege = async (req, res) => {
  const { name, address } = req.body;

  try {
    const newCollege = {
      name,
      address,
      createdAt: new Date().toISOString(),
    };

    const collegeDoc = await db.collection('colleges').add(newCollege);

    res.status(201).json({ message: 'College added successfully', id: collegeDoc.id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all colleges
exports.getColleges = async (req, res) => {
  try {
    const collegesSnapshot = await db.collection('colleges').get();
    const colleges = collegesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    res.status(200).json(colleges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};