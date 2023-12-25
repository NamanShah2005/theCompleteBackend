import mongoose from "mongoose"

let schema = mongoose.Schema({
    Name: String,
    Password: String
})

export const msg = mongoose.model("msg", schema)