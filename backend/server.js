import express from 'express';
import cors from 'cors';
import { moodTexts } from './moodData.js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.chat_id;


function getRandomText(mood) {
  const list = moodTexts[mood] || [];
  return list[Math.floor(Math.random() * list.length)];
}

app.post('/get-text', async (req, res) => {
  const { mood } = req.body;

  // Choose response
  const selectedText = getRandomText(mood);
  // Notify you on Telegram
  try {
    await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      chat_id: chatId,
      text: `Someone selected mood: ${mood}`,
    });
  } catch (err) {
    console.error('Telegram error:', err.message);
  }

  res.json({ text: selectedText });
});

app.listen(3001, () => console.log('Server running on port 3001'));
