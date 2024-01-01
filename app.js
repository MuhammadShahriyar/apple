let express = require('express');
let mongoose = require('mongoose');

let User = require('./db/models/user');
let Ad = require('./db/models/ad');


mongoose.connect('mongodb://localhost:27017/meriSomeDB').then((conn) => {
    console.log(conn)
}).catch((err) => {
    console.log(err);
});

// npm install mongoose

let app = express();

app.use(express.json());

app.put('/user-update', async (req, res) => {

    await User.findByIdAndUpdate(req.body._id, req.body);
    res.json({})

});

app.get('/ads-lao', async (req, res) => {
    let ads = await Ad.find({});
    res.json(ads);
});

app.delete('/user-delete', async (req, res) => {
    let users = await User.findByIdAndDelete(req.query.abc);
    res.json(users);
});

app.post('/create-ad', async (req, res) => {

    let ad = new Ad(req.body);

    await ad.save();

    res.json({});


});

app.get('/user-lao', async (req, res) => {
    let users = await User.find();
    res.json(users);
});

app.post('/signup', async (req, res) => {

    let newUser = new User();
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    await newUser.save();

    res.json({})

})

app.post('/login', async (req, res) => {
    let newUser = await User.findOne({
        email: req.body.email,
        password: req.body.password
    });
    res.json(newUser);
});


app.get("/get-ad",async(req, res)=>{
    let ad = await Ad.findById(req.query.id).populate('meraUser').exec();

    res.json(ad);
});

app.use(express.static('./build'))

app.listen(6070, () => {
    console.log('server chal paring')
});