# Basic Login Authentication System

## Project Overview

This project is a simple login authentication system implemented using HTML, CSS, and JavaScript. It allows users to register, log in, and access a secured page. The primary goal is to provide a basic understanding of user authentication concepts for educational purposes.

## Requirements

- User Registration: Users can sign up by providing a unique username and password.
- Password Encryption: Passwords are securely hashed and salted before storage.
- User Login: Registered users can log in using their credentials.
- Secured Page: Authenticated users can access a secured page with personalized content.
- Error Handling: Proper error handling for scenarios like incorrect login credentials and existing usernames.
- Testing: Thoroughly test the system for both positive and negative scenarios.

## Tools and Technologies

- *Programming Language:* JavaScript
- *Frameworks/Libraries:* None (for simplicity, using basic data structures)
- *Password Encryption:* Basic hashing (not secure for production, use a proper library like bcrypt)

## Implementation Steps

### User Registration

- Create a function to handle user registration.
- Prompt users to enter a username and password.
- Store user information securely in an in-memory data structure.

### Password Encryption

- Use basic hashing (in a real-world scenario, use a secure hashing library like bcrypt).
- Avoid storing plain text passwords to enhance security.

### User Login

- Create a function to handle user login.
- Prompt users to enter their username and password.
- Compare the entered password with the stored hashed password to verify the login.

### Secured Page

- Implement a basic secured page that displays personalized content to authenticated users only.

### Error Handling

- Implement proper error handling to manage cases like incorrect login credentials and already registered users.

### Testing

- Thoroughly test the system to ensure it works as expected, covering both positive and negative scenarios.

## Usage

1. Open index.html in a web browser.
2. Use the registration form to create a new account.
3. Use the login form to log in with the created account.
4. Access the secured page with personalized content for authenticated users.


### Screenshot

![Screenshot (32)](https://github.com/Mohammad-Amir-tech/OIBSIP/assets/143278584/4037588f-e07e-46e6-8f31-c50784082733)
