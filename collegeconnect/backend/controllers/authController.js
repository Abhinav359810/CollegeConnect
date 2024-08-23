// backend/controllers/authController.js
const { getAuth } = require('firebase-admin/auth');
const { db } = require('../config/firebaseAdminConfig');

// Register User (Teacher or Student)
const registerUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Create a new user in Firebase Authentication
    const userRecord = await getAuth().createUser({
      email,
      password,
    });

    // Save user role and additional information in Firestore
    await db.collection('users').doc(userRecord.uid).set({
      email,
      role,  // 'student' or 'teacher'
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verify user credentials via Firebase Auth
    const userRecord = await getAuth().getUserByEmail(email);

    // Get user role from Firestore
    const userDoc = await db.collection('users').doc(userRecord.uid).get();
    const userData = userDoc.data();

    res.status(200).json({ message: 'Login successful', role: userData.role });
  } catch (error) {
    res.status(400).json({ error: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };
