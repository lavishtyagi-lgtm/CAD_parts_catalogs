# CAD Parts Management API

A simple RESTful API for managing CAD parts, built with Node.js, Express, and TypeScript.

---

## Features

- Retrieve all CAD parts (`GET -> /api/parts`)
<img width="1919" height="1079" alt="Screenshot 2025-11-14 162527" src="https://github.com/user-attachments/assets/8a875200-2394-423a-8b16-508d16efa946" />

- Add new CAD parts with validation (`POST -> /api/parts`)
<img width="1920" height="1080" alt="Screenshot 2025-11-14 162622" src="https://github.com/user-attachments/assets/0b06f2de-59df-4253-ab49-c963aa515c53" />

- Delete CAD parts by ID efficiently (`DELETE -> /api/parts/:id`)
<img width="1920" height="1080" alt="Screenshot 2025-11-14 162710" src="https://github.com/user-attachments/assets/074c98e2-16cf-4133-9aea-e6f664ee7a5a" />

- Type-safe data structure and input validation
- In-memory data storage for easy testing

---

## Technology Stack

- Node.js and Express for backend server and routing
- TypeScript for typing and developer experience
- CommonJS module system

##Demo Video

Watch a demonstration of the CAD Parts Management API in action:


https://github.com/user-attachments/assets/2429614b-b552-45d5-961d-819a4b321bf5



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
