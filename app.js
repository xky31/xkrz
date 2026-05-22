const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>反应力测试</h1>
    <div id="box" style="width:200px;height:200px;background:red;margin:50px;"></div>
    <p id="text">点击开始</p>

    <script>
      let startTime;

      const box = document.getElementById("box");
      const text = document.getElementById("text");

      box.onclick = () => {
        if (!startTime) {
          text.innerText = "等待变绿...";
          setTimeout(() => {
            box.style.background = "green";
            startTime = Date.now();
          }, Math.random() * 3000);
        } else {
          const reaction = (Date.now() - startTime) / 1000;
          text.innerText = "你的反应时间：" + reaction + "秒";
          startTime = null;
          box.style.background = "red";
        }
      };
    </script>
  `);
});

app.listen(3000, () => {
  console.log("打开：http://localhost:3000");
});