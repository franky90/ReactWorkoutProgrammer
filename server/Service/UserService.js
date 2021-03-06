// This file contains all the routes for the following Model
import { User } from './../Models/User.Model'
import EncryptionService from './EncryptionService'
import { compare } from 'bcryptjs'//const bcrypt = require('bcrypt')

function UserService() {

    const getUserByUsername = async (userName) =>
    {
        try {
            return await User.findOne({userName})
        } catch (error) {
            return null
        }
    }

    const getUserByEmail = async (email) =>
    {
        try {
            return await User.findOne({email})
        } catch (error) {
            return null
        }
    }


    /**
     * Logic for retrieving all the users from the db
     */
    const getAllUsers = async (excludePassword=true) => {
        if(excludePassword) return await User.find().select("-password")
        return await User.find()
    }



    /**
     * Logic for adding a new user to the db
     * @param {string} userName 
     * @param {string} password
     */
    const addNew = async (userName, password, email, dateOfBirth) => {
        const encryptedPassword = await EncryptionService.hashString(password)
        console.log("\n\n\n")
        console.log('inside the addNew method of UserService')
        console.log(userName, encryptedPassword, email)
        console.log(dateOfBirth)
        console.log("\n\n\n")
        const newUser = new User({
            userName, 
            password: encryptedPassword, 
            email,
            dateOfBirth
        })
        const UserRecord = await newUser.save()
        return UserRecord
    }


    /**
     * Logic for adding a new user to the db
     * @param {string} userName 
     * @param {string} password
     */
    const add = async (userName, password, email, dateOfBirth) => {
        const userRef = await getUserByUsername(userName)
        if(userRef) {
            return {user: {}, isSuccess: false, msg: 'User already exists'}
        } else {
          // if user does not exist we return the following...
          const userRecord = await addNew(userName, password, email, dateOfBirth)
          return {user: userRecord, isSuccess: true, msg: 'new User Added'}
        }
    }

    const verifyEncryptedPassword = async (plainPassword, encryptedPassword) =>
    {
        const isMatch = await compare(plainPassword, encryptedPassword)
        return isMatch
    }


    return {
        getAllUsers,
        add,
        getUserByUsername,
        getUserByEmail,
        verifyEncryptedPassword
    }

}

export default UserService()