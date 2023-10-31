const express = require("express");
const cookieParser = require("cookie-parser");
const { sequelize } = require("./models");
const cors = require("cors");

const usersRouter = require("./routes/users");
const clientsRouter = require("./routes/clients");
const policyRouter = require("./routes/policy");

const app = express();
app.use(
  cors({
    origin: ["http://localhost:5173", /\.vercel\.app$/, /\.onrender\.com$/],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/users", usersRouter);
app.use("/clients", clientsRouter);
app.use("/policy", policyRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen({ port: 15432 }, async () => {
  console.log("Server up on http://localhost:15432");
  await sequelize.authenticate();
  console.log("Database connected!");
});
