export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { content } = req.body;

    const result = "今日穿搭：" + content + "，简约又高级✨";

    res.status(200).json({ result });
  } else {
    res.status(200).send(`
      <h1>AI文案生成器</h1>
      <input id="input" placeholder="输入穿搭描述" />
      <button onclick="send()">生成</button>
      <p id="output"></p>

      <script>
        async function send() {
          const content = document.getElementById('input').value;

          const res = await fetch('/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content })
          });

          const data = await res.json();
          document.getElementById('output').innerText = data.result;
        }
      </script>
    `);
  }
}