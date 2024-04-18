exports.registerUser = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;
    const user = {
      name,
      email,
      password,
      dob,
    };
    return res.status(201).send(user);
  } catch (error) {
    return res.status(500).send(error);
  }
};
