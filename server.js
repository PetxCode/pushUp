const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 22001 || process.env.PORT;
const app = express();
const url = "mongodb://localhost:test24";
const ONLINE_DB =
  "mongodb+srv://AuthClass:AuthClass@codelab.u4drr.mongodb.net/test24?retryWrites=true&w=majority";

mongoose
  .connect(ONLINE_DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase is now Connected");
  });

app.use(cors());
app.use(express.json());

app.use("/", require("./MVC/controller"));

app.listen(port, () => {
  console.log("server is ready");
});
