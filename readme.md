# Support Desk
- Support desk is a fully-functional MERN Stack App
- RESTful API is implemented.
- In this one can create, view, close tickets, add notes and do all crud operations.
- It’s authenticated by the JSON web token.

## Requirements

- Node v10+
- Configured .env file
- MongoDB Account

## How to run

1. Confirm `.env` configuration

Ensure the API keys are configured in `.env` in this directory. It should include the following keys:

```yaml
# MongoDB Connection String - see https://www.mongodb.com/docs/manual/reference/connection-string/
MONGO_URI = 'mongodb+srv://.......' 

# Port 
PORT = 8000 or any free port

# JWT Secret
JWT_SECRET = xxxxxx 

# Path of front-end implementation. 
REACT_FRONTEND_URL = 'https://front_end_app_url.com'
```
My frontend implementation
- [Github](https://github.com/Dikshant09/supportdesk-frontend)
- [Live](https://support-desk-d5y5.onrender.com/)

2. Install dependencies and start the server

```
npm install
npm start
```