const StreamChat = require('stream-chat').StreamChat;
const bodyParser = require("body-parser");
const cors = require('cors');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(cors());


const api_key = process.env.API_KEY
const api_secret = process.env.API_SECRET


app.get('/api/token', (req, res) => {
    if(req.query.user_id) {
        const client = new StreamChat(api_key, api_secret);
        const token = client.createToken(req.query.user_id);
        res.send({token : token});
    }else{
        res.send({message : 'Please provide a user_id'});
    }
});


app.listen(process.env.port || 3000, () => {
    console.log('Server is running');
});