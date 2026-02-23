const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

// static folder serve karega
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
  <head>
      <title>DevOps CI/CD Pipeline</title>
      <link rel="stylesheet" href="/style.css">
  </head>
  <body>
      <div class="container">
          <h1>🚀 CI/CD Pipeline Working</h1>
          <p>Auto Deployment of node app using Jenkins + GitHub Webhook</p>
          <div class="card">
              <h3>Project Details</h3>
              <ul>
                  <li>Node.js + Express</li>
                  <li>Jenkins Declarative Pipeline</li>
                  <li>PM2 Process Manager</li>
                  <li>AWS EC2 Deployment</li>
              </ul>
          </div>
          <button onclick="location.reload()">Refresh</button>
      </div>
  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});