const express = require('express');

const app = express();
const port = 3000;

// Configure EJS as the template engine
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

// GET route: Display the registration form
app.get('/', (req, res) => {
  res.render('index', {
    title: 'User Registration',
    error: null,
    user: null
  });
});

// POST route: Accept and validate form inputs
app.post('/register', (req, res) => {
  const { username, age } = req.body;

  // Perform basic validation
  let errorMessage = null;

  if (!username || username.length < 3) {
    errorMessage = 'Username must be at least 3 characters long.';
  } else if (!age || isNaN(age) || age < 18) {
    errorMessage = 'You must be at least 18 years old.';
  }

  // If validation fails, re-render the form with an error
  if (errorMessage) {
    res.render('index', {
      title: 'Registration Failed',
      error: errorMessage,
      user: null
    });
  } else {
    // If validation passes, render the success state
    res.render('index', {
      title: 'Registration Successful',
      error: null,
      user: username
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});