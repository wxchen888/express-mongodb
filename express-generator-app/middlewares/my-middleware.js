// 示例中间件函数
const my_middleware_function = (req, res, next) => {
  // ... 进行一些操作
  console.log("my_middleware_function");
  next(); // 调用 next() ，Express 将调用处理链中下一个中间件函数。
};

module.exports = my_middleware_function;
