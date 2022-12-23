const express = require("express");
const db = require("./config/database.js");
const router = require("./routes/index.js");
require('dotenv').config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { verifyToken } = require('./middleware/VerifyToken.js');
const barangPinjamaRouter = require('./routes/barangPinjaman.js');
const app = express();

async function dbAuth(){
  try {
    await db.authenticate();
    console.log('Database Connected')
  } catch (error) {
    console.log(error);
  }
}

dbAuth();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.use(verifyToken);
app.use(barangPinjamaRouter);

app.listen(5000, () => {
  console.log('Server running at port 5000');
})