import express from 'express'
import Contact from '../models/contactModel.js'
import { sendMail } from '../config/sendMail.js';

const contactRoute = express.Router();

contactRoute.post("/contact", async (req, res) => {
    try {
        console.log("REQ BODY ", req.body); //yeeeeeeee
        const { name, email, message } = req.body

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields required" })
        }

        const newContact = new Contact({ name, email, message })
        await newContact.save()

        // ✉️ Send Thank You Email
        await sendMail(email, name)

        res.status(201).json({ message: "Message sent & email delivered" });

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

export default contactRoute