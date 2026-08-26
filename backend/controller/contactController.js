const Contact = require("../models/contactModels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createContact = async (req, res) => {
    try {
        
        const { name, email, subject, message, turnstileToken } = req.body;

        const contact = new Contact({
            name,
            email,
            subject,
            message
        });

        const contactData = await contact.save();
        
        res.status(200).send({ success: true, msg: "successfully", data: contactData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}
// ===============================
// ADMIN LOGIN
// ===============================

const adminLogin = async (req, res) => {
    try {
        console.log("Admin login attempt:", req.body);
        const { email, password } = req.body;
        console.log("Email:", email);
        console.log("Password:", password);
        if (!email || !password) {
            return res.status(400).send({ success: false, msg: "Email and password are required"
            });
        }

        // Check admin email
        if (email !== process.env.ADMIN_EMAIL) {
            return res.status(401).send({ success: false, msg: "Invalid email or password"
            });
        }


        // Compare password
        const passwordMatch = await bcrypt.compare(
            password, process.env.ADMIN_PASSWORD_HASH
        );


        if (!passwordMatch) {
            return res.status(401).send({ success: false, msg: "Invalid email or password" });
        }

        // Create JWT
        const token = jwt.sign(
            {
                email: process.env.ADMIN_EMAIL,
                role: "admin"
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        );

        res.status(200).send({
            success: true, msg: "Login successful", token
        });
        console.log("Admin logged in successfully");
    } catch (error) {

        res.status(400).send({ success: false, msg: error.message
        });

    }
};


// ===============================
// GET CONTACT MESSAGES
// ===============================

const adminMessages = async (req, res) => {
    try {

        const messages = await Contact.find().sort({ createdAt: -1 });

        res.status(200).send({ success: true, msg: "Messages retrieved successfully", data: messages});

    } catch (error) {

        res.status(400).send({ success: false, msg: error.message });

    }
};


// ===============================
// EXPORT
// ===============================


module.exports = {
    createContact,
    adminLogin,
    adminMessages
}