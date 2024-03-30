const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: "John",
    id: 1,
  },
  {
    name: "Jane",
    id: 2,
  },
  {
    name: "Joe",
    id: 3,
  },
];

const htmlForm = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
    <link rel="stylesheet" href="./css/styles.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
        <form method="post" action="/">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input name="name" type="text" class="form-control" id="name">
            <div class="mb-3">
                <label for="id" class="form-label">ID</label>
                <input name="id" type="number" class="form-control" id="id">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
`;

app.get("/", (req, res) => {
  res.send(htmlForm);
});

app.post("/", (req, res) => {
  const name = req.body.name;
  const id = Number(req.body.id);
  const user = {
    name: name,
    id: id,
  };
  users.push(user);
  res.status(201).send({
    message: "User Created",
    users,
  });
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
