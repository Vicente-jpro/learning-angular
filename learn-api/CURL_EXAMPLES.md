# Manager API - cURL Examples

This document provides cURL examples for testing the Manager API endpoints.

## Prerequisites

- Backend API running on `http://localhost:8080`
- For PowerShell users: Use `curl.exe` instead of `curl` to avoid using the `Invoke-WebRequest` alias

## Base URL

```
http://localhost:8080/api/managers
```

## Endpoints

### 1. Get All Managers

**Endpoint:** `GET /api/managers`

**cURL Command:**

```bash
# Linux/Mac/Git Bash
curl -X GET http://localhost:8080/api/managers

# PowerShell
curl.exe -X GET http://localhost:8080/api/managers
```

**Expected Response:**

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
]
```

---

### 2. Get Manager by ID

**Endpoint:** `GET /api/managers/{id}`

**cURL Command:**

```bash
# Linux/Mac/Git Bash
curl -X GET http://localhost:8080/api/managers/1

# PowerShell
curl.exe -X GET http://localhost:8080/api/managers/1
```

**Expected Response:**

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

**Error Response (404 Not Found):**

```json
{
  "message": "Manager not found with id: 1",
  "timestamp": "2025-11-30T10:30:00"
}
```

---

### 3. Create New Manager

**Endpoint:** `POST /api/managers`

**cURL Command:**

```bash
# Linux/Mac/Git Bash
curl -X POST http://localhost:8080/api/managers \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Alice Johnson",
    "email": "alice@example.com"
  }'

# PowerShell
curl.exe -X POST http://localhost:8080/api/managers `
  -H "Content-Type: application/json" `
  -d '{\"name\": \"Alice Johnson\", \"email\": \"alice@example.com\"}'
```

**Expected Response (201 Created):**

```json
{
  "id": 3,
  "name": "Alice Johnson",
  "email": "alice@example.com"
}
```

---

### 4. Update Manager

**Endpoint:** `PUT /api/managers/{id}`

**cURL Command:**

```bash
# Linux/Mac/Git Bash
curl -X PUT http://localhost:8080/api/managers/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated",
    "email": "johnupdated@example.com"
  }'

# PowerShell
curl.exe -X PUT http://localhost:8080/api/managers/1 `
  -H "Content-Type: application/json" `
  -d '{\"name\": \"John Updated\", \"email\": \"johnupdated@example.com\"}'
```

**Expected Response:**

```json
{
  "id": 1,
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
```

---

### 5. Delete Manager

**Endpoint:** `DELETE /api/managers/{id}`

**cURL Command:**

```bash
# Linux/Mac/Git Bash
curl -X DELETE http://localhost:8080/api/managers/1

# PowerShell
curl.exe -X DELETE http://localhost:8080/api/managers/1
```

**Expected Response:** 204 No Content (empty body)

---

## Common Issues

### PowerShell: Connection Error

**Problem:**
```
Invoke-WebRequest : Unable to connect to the remote server
```

**Solutions:**
1. Use `curl.exe` instead of `curl` in PowerShell
2. Ensure the backend is running: `.\mvnw.cmd spring-boot:run`
3. Check if port 8080 is not blocked by firewall

### 404 Not Found

**Problem:** Manager with specified ID doesn't exist

**Solution:** Verify the ID exists using the "Get All Managers" endpoint first

### 400 Bad Request

**Problem:** Invalid JSON format or missing required fields

**Solution:** Ensure JSON is properly formatted and all required fields are included

---

## Testing with Alternative Tools

### Using Invoke-WebRequest (PowerShell)

```powershell
# GET
Invoke-WebRequest -Uri "http://localhost:8080/api/managers/1" -Method GET

# POST
$body = @{
    name = "Alice Johnson"
    email = "alice@example.com"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:8080/api/managers" `
  -Method POST `
  -ContentType "application/json" `
  -Body $body
```

### Using HTTPie (if installed)

```bash
# GET
http GET http://localhost:8080/api/managers/1

# POST
http POST http://localhost:8080/api/managers name="Alice Johnson" email="alice@example.com"
```

---

## Notes

- All endpoints support CORS with `origins = "*"`
- Content-Type for POST/PUT requests should be `application/json`
- IDs are of type `Long` in the backend
- Successful creation returns HTTP 201 Created
- Successful deletion returns HTTP 204 No Content
- Not found errors return HTTP 404 with error message
