require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const axios = require('axios');
const OpenAI = require('openai');

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
}

connectToDatabase();

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
