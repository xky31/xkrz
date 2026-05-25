const express = require('express');
const path = require('path');
const app = express();

// 提供静态文件（index.html、CSS、JS 等）
app.use(express.static(path.join(__dirname)));

// 根路径返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
const HOST = '0.0.0.0';

app.listen(PORT, HOST, () => {
  console.log('服务器已启动');
  console.log('本机访问：http://localhost:' + PORT);
  console.log('局域网访问（手机用这个）：http://' + require('os').networkInterfaces()['WLAN']?.find(i => i.family === 'IPv4')?.address + ':' + PORT);
});
