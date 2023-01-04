const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Mars!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);

// git pull origin [branch]
// git status

// git add --all .
// git commit -m "Message"
// git push origin [branch]	