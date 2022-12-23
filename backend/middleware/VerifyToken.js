const jwt = require("jsonwebtoken");
const { Users } = require('../models/index');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    req.authUser = await Users.findOne({
      where:{
        email: decoded.email,
      },
      attributes: ['id', 'name', 'email']
    })
    next();
  })
}

module.exports = {verifyToken}