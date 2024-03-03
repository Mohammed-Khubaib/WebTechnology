const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// DELETE endpoint to delete user details
app.delete('/deleteUser/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Read the users.json file
        const data = await fs.readFile('users.json', 'utf8');
        const users = JSON.parse(data);

        // Check if the user exists
        if (users[`user${userId}`]) {
            // Delete the user
            delete users[`user${userId}`];

            // Write the updated users data back to the file
            await fs.writeFile('users.json', JSON.stringify(users, null, 4));

            res.status(200).json({ message: `User with ID ${userId} deleted successfully.` });
        } else {
            res.status(404).json({ error: `User with ID ${userId} not found.` });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});