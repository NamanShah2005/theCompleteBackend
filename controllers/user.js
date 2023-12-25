import { msg } from "../models/user.js"
import cookieParser from "cookie-parser"

export const getAllUsers = async (req, res) => {
    let user = await msg.find({})
    res.json({
        success: true,
        user
    })
}

export const register = async (req, res) => {
    const { Name, Password } = req.body
    const user = await msg.create({
        Name,
        Password
    })
    console.log(user)
    res.status(201).cookie("token", "iamin", {
        httpOnly: true, expires: new Date(Date.now() + 10 * 1000)
    }).json({
        success: true,
        message: "Registered Successfully"
    })
}

export const detailsById = async (req, res) => {
    let { id } = req.params
    const user = await msg.findById({ _id: id }).catch(() => {
        console.log("false")
    })
    if (user == undefined) {
        res.send("didn't found the data")
    }
    else {
        let r = await res.json({
            success: true,
            user
        })
    }
}

export const specialUser =  async(req,res) => {
    res.json({
        success : true,
        message : "just joking"
    })
}

export const defaultPage = (req, res) => {
    res.send("Nice Working")
}

export const fetchData = async (req, res) => {
    let { Name, newPassword } = req.query

    // changing the password after verifying the name and the password
    msg.updateOne({ Name: Name, $nor: [{ Password: newPassword }] }, { $set: { Password: newPassword } }).then(() => {
        console.log("Password changed")
    }).catch((e) => {
        console.log(e)
    })

    // searching the matched name from the whole database
    const user = await msg.find({ Name })

    // printing all the data searched , after updating the password 
    res.json({
        success: true,
        user
    })
}