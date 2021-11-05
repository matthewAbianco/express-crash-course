const express = require('express');
const path = require('path');
const logger = require('./middleware/logger')
const apiRoutes = require('./routes/api/members');

const app = express();

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// this creates a relative path for the server. meaning every file in the public directory will now be launched when the server starts. AKA a static folder
// Set Static folder
app.use(express.static(path.join(__dirname, 'public')))

// members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));

// This is used to create a direct path to load a single page to the server. It is inefficent as you would need to make one of these for each page you made

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Init middleware
 // app.use(logger)