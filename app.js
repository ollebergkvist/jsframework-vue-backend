// Essentials
const express = require("express"); // Module to run express server
const morgan = require("morgan"); // Module to log requests
const cors = require("cors"); // Module to allow clients from other domains to retrieve data from API
const fs = require("fs"); // Module to work with filesystem
const path = require("path"); // Module to work with directories and file paths
const app = express(); // Exec express
const port = 1337; // Sets server port to 1337
const bodyParser = require("body-parser"); // Body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body

// Imports routes defined in routes dir
const reports = require("./routes/reports.js");
const updateReport = require("./routes/updatereport.js");
const week = require("./routes/week.js");
const register = require("./routes/register.js");
const login = require("./routes/login.js");
const index = require("./routes/index.js");

// Use cors module
app.use(cors());

//Creates a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
    flags: "a",
});

// Don't show the log when it is test
if (process.env.NODE_ENV !== "test") {
    // use morgan to log at command line
    app.use(morgan("combined", { stream: accessLogStream })); // 'combined' outputs the Apache style LOGs
}

// Supports parsing of application/json type post data
app.use(bodyParser.json());

// Supports parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use("/updatereport", updateReport);
app.use("/reports", reports);
app.use("/reports/week/", week);
app.use("/register", register);
app.use("/login", login);
app.use("/", index);

// Starts up server which listens to port 1337
const server = app.listen(port, function () {
    console.log(`ME-API listening on port ${port}!`);
});

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
// Put this last
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

module.exports = server; // Export server in order to use it in test files
