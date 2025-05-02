const express = require("express");
const app = express();
const  userRouter = require("./router/UserRouter.js");
const HostRouter = require("./router/HostRouter.js");

// local modules
const rootDir = require("./utils/PathUtils.js");
const path = require("path");

app.use(express.urlencoded());
app.use(userRouter); 
app.use(HostRouter)

app.use(express.static(path.join(rootDir, "public")));
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, "view", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});
