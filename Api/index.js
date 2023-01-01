const { default: mongoose } = require('mongoose')
const moongoose = require('mongoose')

mongoose.connect('mongodb+srv://eurocase999:Programa2022@cluster0.kgqyjdk.mongodb.net/myapp?retryWrites=true&w=majority')

const User = moongoose.model('User', {
    username: String,
    age: Number,
})

const create = async () => {
    const user = new User({ username: 'chanchito triste', age: 25 })
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
    const user = await User.find({ username: 'chanchito feliz'})
    console.log(user)
}

//search()

const search1 = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user)
}

//search1()

const actualize = async () => {
    const user = await User.findOne({ username: 'chanchito feliz'})
    console.log(user)
    user.age = 30
    user.username = 'chanchito medio'
    await user.save()
}

actualize()
