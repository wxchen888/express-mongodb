var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// const sassMiddleware = require("node-sass-middleware");
const my_middleware_function = require("./middlewares/my-middleware");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const wikiRouter = require("./routes/wiki");

var app = express();
/** css engine setup 暂时不做 */

/** view engine setup */
// 先指定模板的存储文件夹
app.set("views", path.join(__dirname, "views"));
// 再设置模板引擎为jade
app.set("view engine", "jade");

/** middlewares */
// "morgan" node专用的HTTP请求记录器中间件
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// "cookie-parser" 解析cookie头填充req.cookies属性 快捷访问cookie
app.use(cookieParser());
// 添加虚拟路径前缀 托管静态文件
app.use("/static", express.static(path.join(__dirname, "public")));
// 为所有路由添加我自己的中间件
// app.use(my_middleware_function);
// 为/users路由添加我自己的中间件
app.use("/users", my_middleware_function);

/** 路由页面 */
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/wiki", wikiRouter);

/** catch 404 and forward to error handler */
app.use(function (req, res, next) {
  // "http-errors" 专门处理错误的中间件
  next(createError(404));
});

/** error handler */
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
