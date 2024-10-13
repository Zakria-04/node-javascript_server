import USER_MODEL from "../Models/user.module.js";

const createUser = (req, res) => {
  const { userName, userPass } = req.body;

  USER_MODEL.create({
    userName: userName,
    userPass: userPass,
  })
    .then((Cres) => {
      res.status(200).json({ user: Cres });
    })
    .catch((err) => {
      res.status(500).json({ err: true, errorMessage: err.message });
    });
};

const loginUser = async (req, res) => {
  const { userName, userPass } = req.body;

  const user = await USER_MODEL.findOne({
    userName,
    userPass,
  });

  if (!user) {
    res
      .status(401)
      .json({ auth: false, errorMessage: "Name or Password are incorrect!" });
  } else if (user.userName === userName && user.userPass === userPass) {
    res.status(200).json({ user });
  }
};

export { createUser, loginUser };
