const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

function authenticateToken(req, res, next) {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, secret);
    req.user = verified;
    next();
  } catch (error) {
    console.error('Invalid Token Error:', error);
    res.status(400).json({ message: 'Invalid Token' });
  }
}

module.exports = {
  authenticateToken,
};
