const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('헬로 월드🌸 지금 연습중');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});