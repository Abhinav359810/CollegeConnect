// roleMiddleware.js
const { db } = require('../config/firebaseConfig');

const checkUserRole = (allowedRoles) => {
  return async (req, res, next) => {
    try {
      const userId = req.headers.authorization.split('Bearer ')[1];

      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized access' });
      }

      const userDoc = await db.collection('users').doc(userId).get();
      const userData = userDoc.data();

      if (!allowedRoles.includes(userData.role)) {
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
      }

      next();
    } catch (error) {
      res.status(500).json({ error: 'Failed to authenticate user role' });
    }
  };
};

module.exports = checkUserRole;