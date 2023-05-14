const express = require("express");
const PORT = process.env.port || 8000;
const app = express();
const dotenv = require("dotenv");

const cors = require("cors");
const connectDB = require("./config/mongoose");
dotenv.config();

connectDB();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/doctors", require("./routes/doctor"));
app.use("/patients", require("./routes/patient"));
app.use("/reports", require("./routes/report"));

app.listen(PORT, (error) => {
   if (error) {
      console.log("error in the port");
   }
   console.log("******************* server is running on the port  **********************",PORT);
});

