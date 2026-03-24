require('dotenv').config();
const express = require('express');
const cors = require('cors');

const destinationsRoutes = require('./src/routes/destinations');
const packagesRoutes = require('./src/routes/packages');
const authRoutes = require('./src/routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/destinations', destinationsRoutes);
app.use('/api/packages', packagesRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening gracefully on port ${PORT}`);
  });
}

module.exports = app;
