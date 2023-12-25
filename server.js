import { app } from "./id.js";
import { connectDB } from "./data/database.js"

connectDB()

app.listen(process.env.PORT, process.env.HOSTNAME, () => {
    console.log(`The server is working on http://${process.env.HOSTNAME}:${process.env.PORT}/`)
})