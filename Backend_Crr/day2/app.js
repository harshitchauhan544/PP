const HTTP = require('http');
const PORT = 1200;

const server = HTTP.createServer((req, res) => {
    console.log(req);
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html');
    res.setHeader('my-name', 'John Doe');
    
    res.end(
        `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Simple Card</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f3f4f6;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .card {
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      padding: 20px;
      max-width: 300px;
      text-align: center;
    }

    .card img {
      width: 100%;
      border-radius: 10px;
    }

    .card h2 {
      margin: 15px 0 10px;
      font-size: 1.5em;
    }

    .card p {
      color: #555;
      font-size: 0.95em;
    }

    .card button {
      margin-top: 15px;
      padding: 10px 20px;
      border: none;
      border-radius: 6px;
      background-color: #2563eb;
      color: white;
      cursor: pointer;
    }

    .card button:hover {
      background-color: #1d4ed8;
    }
  </style>
</head>
<body>
  <div class="card">
    <img src="https://via.placeholder.com/300x180" alt="Card Image">
    <h2>Card Title</h2>
    <p>This is a simple description for the card. You can customize it as needed.</p>
    <button>Learn More</button>
  </div>
</body>
</html>
`
);
})

server.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`);
})