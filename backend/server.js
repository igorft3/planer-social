const express = require("express");
const port = 3000;
const app = express();

app.use(express.json());

app.use("/todos", require("./routes/todoRoutes"));

app.listen(port, () => console.log(`Server running on port ${port}`));
