const Contact = require("../models/contactModels");

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


module.exports = {
    createContact
}