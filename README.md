# NodeMailer

## Overview
This is a simple Node.js application that demonstrates how to send emails using the nodemailer library. This project serves as a starting point for developers looking to integrate email functionality into their Node.js applications.

## Features
<b>Email Sending</b>: Demonstrates the basic setup for sending emails using the nodemailer library.
<br/>
<b>Gmail Integration:</b> Utilizes Gmail as the email service provider for sending test emails.

## Getting Started
1. Clone the project repository:

    ```bash
    git clone https://github.com/AkshaySinghParihar7/NodeMailer.git
    ```

2. Navigate to the project directory:

    ```bash
    cd NodeMailer
    ```
3. Install dependencies:

    ```bash
    npm install
    ```
4. Run the application:

    ```bash
    npm start
    ```
5. POST request for sending mail:

   ```
   {
        "subject": "mail subject",
        "receiver": "receiver",
        "cc": "mail receiver",
        "message": "html content"
   }
   ```
Check the console for the email sent status.

## Project Structure

- `index.js`: Starting point for Main application file.
- `sendMail.js`: Mail logic file for sending emails.
- `node_modules/`: Directory containing project dependencies.
- `package.json`: Project configuration file.
- `README.md`: Project documentation.

  ## Dependencies

- [nodemailer](https://www.npmjs.com/package/nodemailer): Library for sending emails.

