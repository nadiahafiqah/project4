const { User } = require("../models");
const { createSecretToken } = require("../util/SecretToken");

module.exports = {
  signup,
  login,
  getUser,
  logout,
  loggedIn,
};

async function signup(req, res) {
  console.log("Users route signup");
  const { username, firstName, lastName, email, password } = req.body;
  console.log("username:", username);
  console.log("password:", password);

  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({
      username,
      // firstName,
      // lastName,
      // email,
      password,
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    //console.log("user, ", user);
    if (!user) {
      return res.json({ message: "Incorrect username/password!" });
    }
    const validPassword = await user.validPassword(password);
    console.log("validPassword", validPassword);
    if (!validPassword) {
      return res.json({ message: "Incorrect username/password!" });
    }
    const token = createSecretToken(user.uuid);

    res
      .cookie("access_token", token, {
        httpOnly: false,
        path: "/",
        secure: true,
        sameSite: "lax",
      })
      .cookie("username", username, {
        httpOnly: false,
        path: "/",
        secure: true,
        sameSite: "lax",
      });
    res.json({
      // message: "User logged in successfully!",
      success: true,
    });
  } catch (err) {
    console.log(err);
  }
}

async function loggedIn(req, res) {
  const username = req.cookies.username;
  const loggedInStatus = req.cookies.username ? true : false;
  return res.json({
    username,
    loggedInStatus,
    message: loggedInStatus ? "Logged in successfully!" : null,
  });
}

async function logout(req, res) {
  res
    .clearCookie("access_token", {
      httpOnly: false,
      path: "/",
      secure: true,
      sameSite: "lax",
    })
    .clearCookie("username", {
      httpOnly: false,
      path: "/",
      secure: true,
      sameSite: "lax",
    });
  return res.json({ message: "User logged out successfully!" });
}

async function getUser(req, res) {
  const { username } = req.params;
  console.log(username);
  try {
    const user = await User.findOne({
      where: { username },
      include: ["clients"],
      attributes: {
        exclude: ["password"],
      },
    });
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
}
