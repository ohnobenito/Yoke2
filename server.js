let express = require("express");
let exphbs = require("express-handlebars");

let app = express();
let PORT = process.env.PORT || 3000;



app.engine("handlebars", exphbs({extname: "handlebars", defaultLayout: "main", layoutsDir: __dirname + "/views/layouts" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
let routes = require("./routes/index.js");
app.use(routes);


app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});