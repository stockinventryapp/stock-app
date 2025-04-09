const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); // This serves files from the "public" folder

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ This makes your app accessible from mobile too:
app.listen(3000, '0.0.0.0', () => {
  console.log('✅ Stock App is running on your network');
  console.log('📱 Open http://<YOUR_PC_IP>:3000 on your mobile');
});
