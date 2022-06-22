const express = require('express');
const cors = require("cors");
const routes = require('./routes');



const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
   res.json({ message: "Welcome to core academy application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

/*routes*/
app.use('/api', routes);