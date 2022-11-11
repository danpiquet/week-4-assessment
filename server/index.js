const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, addCompliment, deleteFortune, suggestNewFriend } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune);
app.post('/api/compliment',addCompliment);
app.delete('/api/fortune/:id',deleteFortune)
app.get('/api/friend', suggestNewFriend)

app.listen(4000, () => console.log("Server running on 4000"));
