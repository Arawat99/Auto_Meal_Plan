const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const AutoMealPlan = require('./Model/autoMealPlan.Model.js');
const app = express();



// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname)));
// Middleware to parse URL-encoded bodies (from form submissions)
app.use(express.urlencoded({extended: true}));




app.get('/signup',  (req, res) => {
    res.sendFile(path.join(__dirname, 'signupPage.html'));
});

app.get('/',  (req, res) => {
    res.send('Welcome to Auto Meal Plan');
});




// link to /api/account are for testing and prcticing
app.get('/api',  (req, res) => {
    res.send('Welcome to API');
});


// Retrieve all data in the database
app.get('/api/account', async(req, res) => {
    try{
        const accounts = await AutoMealPlan.find({});
        res.json(accounts);
    }catch{
        res.status(500).json({message: error.message});
    }
});


// retrieve specific data with id
app.get('/api/account/:id', async (req, res) => {
    try{
        const { id } = req.params;
        const account = await AutoMealPlan.findById(id);
        res.status(200).json(account);
    }catch{
        res.status(500).json({message: error.message});
    }
});

app.post('/api/account', async (req, res) => {
    try{
        const account = await AutoMealPlan.create(req.body);
        res.status(200).json(account);
    }catch{
        res.status(500).json({message: error.message});
    }
});


// update account
app.put('/api/account/:id', async (req, res) => {
    try{
        const { id } = req.params;

        const account = await AutoMealPlan.findByIdAndUpdate(id, req.body);

        if(!account) {
            return res.status(404).json({ message: 'Account not found'});
        }

        const  updatedAccount = await  AutoMealPlan.findById(id);
        res.status(200).json(updatedAccount);
    }catch{
        res.status(500).json({ message: error.message});
    }
})












app.post('/signup', async (req, res) => {
    console.log('Received Signup Data:', req.body);  
    
    try{
        const account = await AutoMealPlan.create(req.body);
        res.status(200).json({ message: 'Sign Up Successfully' });
    }catch(error){
        console.log("Error creating an Account:", error);
    }
});


app.post('/signup', async (req, res) => {

})





mongoose.connect("mongodb+srv://chrisjoshuaolaguera:F2W3iXsTjZUiwRYl@mealplandb.1ar5m.mongodb.net/AutoMealPlanDB?retryWrites=true&w=majority&appName=MealPlanDB")
.then(() => {
    console.log('Connected to the Database');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log('Connection Failed');
});