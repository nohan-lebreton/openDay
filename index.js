const express = require('express');
const app = express();
const port = 3000;

app.get('/addition', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b) {
        return res.status(400).send("Please provide 'a' and 'b' as query parameters.");
    }
    const sum = parseFloat(a) + parseFloat(b);
    res.json({ a, b, sum });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
