import { Contact } from "../models/contact.models.js";

// Create a new contact message
const createContact = async (req, res) => {
  try {
    console.log("data is coming");
    console.log("Request body:", req.body);

    const { name, email, subject, message } = req.body;

    if ([name, email, subject, message].some((field) => !field?.trim())) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(201).json({ message: "Contact message sent successfully" });
  } catch (error) {
    console.error("Error creating contact message:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getStats = async (req, res) => {
  try {
    // Fetch statistics data from the database or any other source
    console.log("Fetching statistics data...");

    const stats = await Contact.find();

    console.log("Statistics data:", stats);

    // Example statistics data
    res.json(stats);
  } catch (error) {
    console.error("Error fetching statistics:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export { createContact, getStats };
