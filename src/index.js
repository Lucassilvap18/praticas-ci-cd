const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'CI working' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app; // export para testes
