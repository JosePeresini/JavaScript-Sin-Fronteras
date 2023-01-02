const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eurocase999:Programa2022@cluster0.bxzfuvg.mongodb.net/myApp?retryWrites=true&w=majority')

const User = mongoose.model('User', {
    username: String,
    age: Number,
})

const create = async () => {
    const user = new User({ username: 'chanchito triste', age: 25})
    const savedUser = await user.save()
    console.log(savedUser)
}

//create()

const searchAll = async () => {
    const users = await User.find()
    console.log(users)
}

//searchAll()

const search = async () => {
    const user = await User.find({username: 'chanchito feliz'})
    console.log(user)
}

//search()

const find1 = async () => {
    const user = await User.findOne({username: 'chanchito feliz'})
    console.log(user)
}

//find1()

const actualize = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user)
    user.age = 30
    await user.save()
}

//actualize()

const deleted = async () => {
    const user = await User.findOne({ username: 'chanchito triste'})
    console.log(user)
    if (user) {
    await user.remove()
    }
}

deleted()


