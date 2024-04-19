const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create a schema
const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [100, "Name must be at most 100 characters"],
    trim: true,
    validate: {
      validator: (value) => {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: "Name must only contain letters",
    },
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["male", "female"],
      message: "Gender must be male or female",
    },
    validate: {
      validator: (value) => {
        return /^[a-zA-Z]+$/.test(value);
      },
      message: "Gender must only contain letters",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    minlength: [3, "Email must be at least 3 characters"],
    maxlength: [100, "Email must be at most 100 characters"],
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: (value) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
      },
      message: "Email must be a valid email address",
    },
  },
  phone: {
    type: String,
    validate: {
      validator: function (v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);
      },
      message: (props) => `${props.value} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [1, "Age must be at least 1 year"],
    max: [100, "Age must be at most 100 years"],
    validate: {
      validator: (value) => {
        return /^[0-9]+$/.test(value);
      },
      message: "Age must be a number",
    },
  },
  salary: {
    type: Number,
    required: [true, "Salary is required"],
    min: [1, "Salary must be at least 1 dollar"],
    max: [100000, "Salary must be at most 100000 dollars"],
    validate: {
      validator: (value) => {
        return /^[0-9]+$/.test(value);
      },
      message: "Salary must be a number",
    },
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

// create a model
const Users = mongoose.model("users", usersSchema);

const connect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/users");
    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

app.get("/", async (req, res) => {
  try {
    const filters = {};
    if (req.query.salary && req.query.age) {
      filters.$and = [{ salary: { $gte: req.query.salary } }, { age: { $gte: req.query.age } }];
    } else if (req.query.salary && req.query.email) {
      filters.$or = [{ salary: { $gte: req.query.salary } }, { email: { $regex: req.query.email, $options: "i" } }];
    } else if (req.query.age && req.query.email) {
    }
    if (req.query.salary) {
      filters.salary = { $gte: req.query.salary };
    }
    if (req.query.name) {
      filters.name = { $regex: req.query.name, $options: "i" };
    }
    if (req.query.age) {
      filters.age = { $gte: req.query.age };
    }

    const users = await Users.find(filters).sort({ created: -1 }).select("name email age salary created");
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.post("/", async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete({ _id: req.params.id });
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          name: req.body.name,
          gender: req.body.gender,
          email: req.body.email,
          age: req.body.age,
          salary: req.body.salary,
        },
      },
      {
        new: true,
      }
    );
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/generate/random", async (req, res) => {
  try {
    const users = await Users.insertMany([
      {
        name: "John",
        gender: "male",
        email: "jhon@j.com",
        age: 20,
        salary: 10000,
        phone: "123-456-7890",
      },
      {
        name: "Jane",
        gender: "female",
        email: "jane@j.com",
        age: 20,
        salary: 10000,
        phone: "123-456-7890",
      },
      {
        name: "Joe",
        gender: "male",
        email: "joe@j.com",
        age: 20,
        salary: 10000,
        phone: "123-456-7890",
      },
      {
        name: "Jack",
        gender: "male",
        email: "jack@j.com",
        age: 20,
        salary: 10000,
        phone: "123-456-7890",
      },
      {
        name: "Jill",
        gender: "female",
        email: "jill@j.com",
        age: 20,
        salary: 10000,
        phone: "123-456-7890",
      },
    ]);
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

app.get("/delete/all", async (req, res) => {
  try {
    await Users.deleteMany({}).then(() => {
      res.send("All users deleted successfully");
    });
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, async () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  await connect();
});
