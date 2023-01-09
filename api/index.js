const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://jose:asd123@cluster0.j3vchqg.mongodb.net/myApp?retryWrites=true&w=majority');

const User = mongoose.model('User', {
    username: String,
    age: Number,
})

const create = async () => {
    const user = new User({ username: 'happy piggy', age: 25});
    const savedUser = await user.save();
    console.log(savedUser);
}

// create();

const searchAll = async () => {
    const users = await User.find();
    console.log(users);
}

// searchAll();

const search = async () => {
    const user = await User.find({username: 'piggy'});
    console.log(user);
}

// search();

const searchOne = async () => {
    const user = await User.findOne({username: 'piggy'});
    console.log(user);
}

// search1();

const actualize = async () => {
    const user = await User.findOne({ username: 'piggy'});
    console.log(user);
    user.age = 30;
    await user.save();
}

// actualize();

const deleteOne = async () => {
    const user = await User.findOne({ username: 'happy piggy'});
    console.log(user);
    if (user) {
        await user.remove();
    }
}

deleteOne();