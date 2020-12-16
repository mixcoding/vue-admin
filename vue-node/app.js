var productRouter = require('./routes/product');
app.use('/product', productRouter);

// 跨域问题解决方面
const cors = require('cors');
app.use(cors({
  origin: ['http://localhost:8080'],
  methods: ['GET', 'POST']
}));
// 跨域问题解决方面
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
