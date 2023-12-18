const users = require('../Model/userSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// register
exports.register = async (req, res) => {
    console.log('Inside register');
    const { username, email, phone, password } = req.body;
    console.log(`Username: ${username}, Email: ${email}, Phone: ${phone}, Password: ${password}`);

    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json('Invalid email format');
        }

        const existingUser = await users.findOne({ email });
        if (existingUser) {
            return res.status(409).json('User already exists. Please login.');
        }

        const saltRounds = 10; 
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user
        const newUser = new users({
            username,
            email,
            phone,
            password:hashedPassword
        });

        // Save the user to the database
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });

        // Return user and token in the response
        res.status(200).json({ user: newUser, token });
    } catch (err) {
        console.error(`Error: ${err.message}`);
        res.status(500).json(`Error: ${err.message}`);
    }
};
