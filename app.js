const StreamChat = require('stream-chat').StreamChat;
const express = require('express');
const app = express();


const api_key = 'z8h2jx7usf5f'
const api_secret = 'yaedepp6e5d9xrnpcm5v3s478bcs34pazryucfyy8y7egsmtfk4hf8zxauzck4mk'


app.get('/token', (req, res) => {
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