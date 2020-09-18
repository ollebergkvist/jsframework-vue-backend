// // // This is middleware called for all routes.
// Alternative to the morgan module
// // // Middleware takes three parameters.
// app.use((req, res, next) => {
//     console.log(req.method);
//     console.log(req.path);
//     next();
// });

// GET, POST, PUT, DELETE routes
// API responds with JSON
// app.get("/", (req, res) => {
//     const data = {
//         data: {
//             msg: "Receiving request from local server",
//         },
//     };

//     res.json(data);
// });

// app.get("/test2", (req, res) => {
//     res.status(201).json({
//         data: {
//             msg: "TEST TEST",
//         },
//     });
// });

// app.put("/put", (req, res) => {
//     res.status(204).json({
//         data: {
//             msg: "Got a PUT request",
//         },
//     });
// });

// app.delete("/delete", (req, res) => {
//     res.status(204).json({
//         data: {
//             msg: "Got a DELETE request",
//         },
//     });
// });

// // Dynamic route receiving params
// app.get("/user/:id", (req, res) => {
//     const data = {
//         data: {
//             msg: req.params.id,
//         },
//     };

//     res.json(data);
// });