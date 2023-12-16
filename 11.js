const http = require('http');

const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response
    res.end('Hello, World!\n');
});

const PORT = 3000;

// Start the server and listen on port 3000
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
