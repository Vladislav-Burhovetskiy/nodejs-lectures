const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootDir = require("./helpers/path-root-dir");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const controllerNotFound = require("./controllers/not-found");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(controllerNotFound.notFound);

app.listen(3001);
