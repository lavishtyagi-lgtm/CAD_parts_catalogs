# CAD Parts Management API

A simple RESTful API for managing CAD parts, built with Node.js, Express, and TypeScript.

---

## Features

- Retrieve all CAD parts (`GET -> /api/parts`)
- <img width="1918" height="1078" alt="image" src="https://github.com/user-attachments/assets/539fee15-6be3-451f-9e20-6adcf0fe8b73" />

- Add new CAD parts with validation (`POST -> /api/parts`)
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9cbf9bc1-469a-4325-8b04-1ccf4987a565" />

- Delete CAD parts by ID efficiently (`DELETE -> /api/parts/:id`)
- <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/aa1dd477-9784-4d4a-83da-a8d440ffa5f8" />

- Type-safe data structure and input validation
- In-memory data storage for easy testing

---

## Technology Stack

- Node.js and Express for backend server and routing
- TypeScript for typing and developer experience
- CommonJS module system

##Demo Video

Watch a demonstration of the CAD Parts Management API in action:


---

## Installation & Running

1. Clone the repository:
2. Navigate to the server folder:
3. Install dependencies:
4. Start the server:[npm start]
5. Access the API at `http://localhost:8000/api/parts`

---

## API Usage

### Get All Parts

- **Method:** `GET`
- **Endpoint:** `/api/parts`
- **Response:** JSON array of all parts

### Add a New Part

- **Method:** `POST`
- **Endpoint:** `/api/parts`
- **Body:**
- **Responses:**
- `201 Created` with the created part
- `400 Bad Request` if input invalid
- `409 Conflict` if part ID already exists

### Delete a Part

- **Method:** `DELETE`
- **Endpoint:** `/api/parts/:id`
- **Response:**  
- `200 OK` on successful deletion  
- `404 Not Found` if part does not exist

---

## Notes

- The data is stored in memory and resets on server restart.
- Suitable for learning/demo purposes.
- Extend with database persistence for production.

---

## Contact
For questions, contact Lavish Tyagi at [`lavish.tyagi@cctech.co.in`].
