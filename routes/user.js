import express from "express"
import { defaultPage, detailsById, fetchData, getAllUsers, register, specialUser } from "../controllers/user.js"

const router = express.Router()

router.get("/", defaultPage)

router.get("/user/all", getAllUsers)

// using Params to fetch the data
router.get("/userid", fetchData)

// the next url and the url : userses/:id are same (as special will be taken as the id there) , this one shows that javascript is read from top to bottom, asspecial will be hit first, it will not go to the next url
router.get("/userses/special" , specialUser)

// dynamic url and req.params   and finding all the details from the database of that particular id (with error handling)
router.get("/userses/:id", detailsById)

router.post("/user/new", register)

export default router