// import axios from 'axios';
// var url = 'http://localhost:3000'; // express服务器的地址
// axios
//   .get(url + '/product') // 放数据的接口
//   .then(function (response) {
//     // 收到的数据
//     console.log(response);
//     console.log(response.data); // 展示数据（看看是否拿到，和数据长啥样）
//     var nodeData = response.data;
//   })
//   .catch(function (error) {
//     console.log(error);  ![在这里插入图片描述](https://img-blog.csdnimg.cn/20191013132943460.jpg)
//   });

var express = require('express'); // 使用express
var router = express.Router(); // 放数据
/* GET home page. */
router.get('/', function (req, res, next) {
  var data = {
    code: 0,
    data: {
      name: 'aaa',
      pwd: '123'
    },
    isSuccess: true,
    msg: '请求成功'
  };
  res.json(data);
});
module.exports = router;
