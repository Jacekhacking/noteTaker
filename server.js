const express = require('express');
const path = require('path');
const routes = require("./routes")



const app = express();
const PORT = 3003;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(routes);



app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});