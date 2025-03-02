const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use environment port if available

// Middleware
app.use(express.json());
app.use(cors());

// Import Routes
const userRoutes = require('./Routes/UserRoutes');  // Ensure filename matches
const recipeRoutes = require('./Routes/recipeRoutes');

// Use Routes
app.use('/users', userRoutes);
app.use('/recipes', recipeRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch((err) => {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1); // Stop server if DB fails
});

// Home Route (Basic API Check)
app.get('/', (req, res) => {
    res.json({ message: "Welcome to the Recipe Sharing Platform Backend!" });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port: ${PORT}`);
});
