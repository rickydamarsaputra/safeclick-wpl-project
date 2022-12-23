const { Users } = require('../models/index');
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { validationResult } = require("express-validator")
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'example@gmail.com',
    pass: 'jlskiznocyqankfp'
  }
})

const getUser = async (req, res) => {
  try {
    const user = await Users.findOne({
      attributes: ['id', 'name', 'email']
    });
    res.json({
      status: 'success',
      data: user
    })
  } catch (error) {
    console.log(error)
  }
}

const register = async (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 'fail',
      errors: errors.array()
    });
  }
  const { name, email, password, confPassword } = req.body;
  if (password !== confPassword) return res.status(400).json({ msg: "Password dan confirm password tidak cocok" });
  const salt = await bcrypt.genSalt();
  const hashPassword = await bcrypt.hash(password, salt);

  const user = await Users.findOne({
    where: {
      email
    }
  })
  if (user) return res.status(400).json({
    status: 'fail',
    msg: 'Email telah terdaftar'
  })

  try {
    const emailToken = jwt.sign({ name, email }, process.env.EMAIL_SECRET, {
      expiresIn: '1d',
    },)

    const url = `http://localhost:5000/confirmation/${emailToken}`;
    await transporter.sendMail({
      to: email,
      subject: 'Confirm Email',
      html: `Hi there! <br>
      Thank you for signing up. <br><br>
      To get you started, please click on the link below to confirm your email address. It will only take a couple of seconds. <br><br>
      <a href="${url}">${url}</a> <br><br>
      If you didn‘t submit your email address to join our subscriber list, just ignore this email. <br><br>
      Regards, <br><br>
      [company name] support team.`
    })

    await Users.create({
      name,
      email,
      password: hashPassword,
    });
    res.json({
      status: 'success',
      msg: 'Register Berhasil'
    })
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message
    })
  }
}

const login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        email: req.body.email
      }
    });
    if (!user.confirmed) throw new Error('Please confirm your email to login')

    const match = await bcrypt.compare(req.body.password, user.password)
    if (!match) return res.status(400).json({ msg: 'Login failed' });
    const userId = user.id;
    const name = user.name;
    const email = user.email;
    const accessToken = jwt.sign({ userId, name, email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '20s',
    })
    const refreshToken = jwt.sign({ userId, name, email }, process.env.REFRESH_TOKEN_SECRET, {
      expiresIn: '1d',
    })

    await Users.update({ refresh_token: refreshToken }, {
      where: {
        id: userId
      }
    })
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,

    })

    res.json({ accessToken })
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      msg: 'Login failed'
    })
  }
}

const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken
    }
  })
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await Users.update({ refreshToken: null }, {
    where: {
      id: userId
    }
  })
  res.clearCookie('refreshToken');
  return res.status(200).json({
    status: 'success',
    msg: 'Logout berhasil'
  })
}

const resetPassword = async (req, res) => {
  const { token } = req.params;
  if (!token) res.status(400).send({ status: 'fail', msg: 'Token is missing' });

  try {
    const decoded = await jwt.verify(token, process.env.EMAIL_SECRET);
    const email = decoded.email;

    const { password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({
      status: 'fail',
      msg: 'Pasword dan confirm password tidak cocok'
    });

    await Users.update({ password }, {
      where: {
        email
      }
    })

    return res.json({
      status: 'success',
      msg: 'Password berhasil direset'
    })
  } catch (error) {
    res.status(404).json({
      status: 'error',
      error: {
        message: error.message || serverErrorMsg,
      }
    })
  }
}

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  if (!email) res.status(400).json({
    status: 'fail',
    msg: 'Email tidak boleh kosong'
  });

  const resetToken = jwt.sign({ email }, process.env.EMAIL_SECRET, { expiresIn: '1d' });
  const url = `http://localhost:5000/reset-password/${resetToken}`;

  try {
    await transporter.sendMail({
      to: email,
      subject: 'Reset Password',
      text: `Please click the following link to reset your password: ${url}`,
      html: `<p>Please click the following link to reset your password:</p>
             <p><a href="${url}">${url}</a></p>`
    })
    return res.json({
      status: 'success',
      msg: 'Password reset email sent. Please check your email for a reset link.'
    })
  } catch (error) {
    return res.sendStatus(404);
  }
}

const emailVerification = (req, res) => {
  jwt.verify(req.params.token, process.env.EMAIL_SECRET, async (err, decoded) => {
    if (err) return res.sendStatus(403);
    try {
      await Users.update({ confirmed: true }, {
        where: {
          email: decoded.email
        }
      })
      return res.json({
        status: 'success',
        msg: 'Email berhasil diverifikasi'
      });

    } catch (error) {
      return res.json({
        status: 'fail',
        msg: error.message
      });
    }
  })
}

module.exports = {
  login, 
  register, 
  getUser, 
  logout, 
  emailVerification, 
  forgotPassword, 
  resetPassword}