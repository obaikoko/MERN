const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../model/userModel')
// @desc Register User
// @route POST /api/user/register
// @privacy Public

const register = asyncHandler ( async( req, res) => {
    const {name, email, password} = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all field')
    }

    // user Already Exist
    const userExist = await User.findOne({email})
    if (userExist) {
        res.status(400)
        throw new Error('User Already Exist')
    }
    //  HashPassword 
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(200)
        res.json({
            name: user.name,
            email: user.email,
            _id: user.id
        })
    } else {
        res.status(400)
        throw new Error('Invalide user data')
    }
 
})


// @desc Register User
// @route POST /api/yusers/login
// @privacy Public 

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error('email or password required')
    }

    const user = await User.findOne({email})

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200)
        res.json({
            name: user.name,
            email: user.email,
            _id: user.id
        })
    } else {
        res.status(400)
        throw new Error('Invalid email or password') 
    }
}) 
     
// @desc Register User
// @route GET /api/user/getAll
// @privacy Private
const getAll = (req, res) => {
    res.status(200)
    res.json({message: 'this is getAll'})
}


module.exports = {
    register,
    login,
    getAll
}