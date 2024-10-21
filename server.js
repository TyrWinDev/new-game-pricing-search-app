import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample data (replace with database in a real application)
const games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    image: "https://via.placeholder.com/300x200",
    rating: "9.5",
    publisher: "Nintendo",
    releaseDate: "March 3, 2017",
    platforms: ["Nintendo Switch", "Wii U"],
    price: "$59.99"
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    image: "https://via.placeholder.com/300x200",
    rating: "9.7",
    publisher: "Rockstar Games",
    releaseDate: "October 26, 2018",
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    price: "$39.99"
  },
  // Add more games here
];

// Routes
app.get('/api/games', (req, res) => {
  res.json(games);
});

app.get('/api/games/:id', (req, res) => {
  const game = games.find(g => g.id === parseInt(req.params.id));
  if (!game) return res.status(404).json({ message: 'Game not found' });
  res.json(game);
});

app.post('/api/auth/login', (req, res) => {
  // Implement login logic here
  res.json({ message: 'Login successful' });
});

app.post('/api/auth/register', (req, res) => {
  // Implement registration logic here
  res.json({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});