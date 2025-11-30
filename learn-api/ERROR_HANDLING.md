# Error Handling Configuration

This Spring Boot API now includes comprehensive error handling with structured error responses.

## Components

### 1. Custom Exceptions

#### ResourceNotFoundException
- **Purpose**: Thrown when a requested resource (Manager, Employee) is not found
- **Usage**: `throw new ResourceNotFoundException("Manager", "id", id)`
- **Response**: HTTP 404 with detailed error message

#### BadRequestException
- **Purpose**: Thrown when the request data is invalid
- **Usage**: `throw new BadRequestException("Invalid request data")`
- **Response**: HTTP 400 with error message

### 2. ErrorResponseDTO

Standardized error response format:

```json
{
  "timestamp": "2025-11-30T10:30:00",
  "status": 404,
  "error": "Not Found",
  "message": "Manager not found with id: '5'",
  "path": "/api/managers/5",
  "details": []
}
```

**Fields:**
- `timestamp`: When the error occurred
- `status`: HTTP status code
- `error`: Error type description
- `message`: Detailed error message
- `path`: API endpoint that caused the error
- `details`: Additional error details (for validation errors)

### 3. GlobalExceptionHandler

Centralized exception handling using `@RestControllerAdvice`:

- **ResourceNotFoundException**: Returns 404 NOT FOUND
- **BadRequestException**: Returns 400 BAD REQUEST
- **MethodArgumentNotValidException**: Returns 400 with validation details
- **Exception** (catch-all): Returns 500 INTERNAL SERVER ERROR

## Error Response Examples

### Resource Not Found (404)
```json
{
  "timestamp": "2025-11-30T10:30:00",
  "status": 404,
  "error": "Not Found",
  "message": "Manager not found with id: '99'",
  "path": "/api/managers/99"
}
```

### Validation Error (400)
```json
{
  "timestamp": "2025-11-30T10:30:00",
  "status": 400,
  "error": "Validation Failed",
  "message": "Invalid input data",
  "path": "/api/managers",
  "details": [
    "name: must not be blank",
    "email: must be a valid email address"
  ]
}
```

### Internal Server Error (500)
```json
{
  "timestamp": "2025-11-30T10:30:00",
  "status": 500,
  "error": "Internal Server Error",
  "message": "An unexpected error occurred: Database connection failed",
  "path": "/api/managers"
}
```

## Benefits

1. **Consistent Error Format**: All errors follow the same structure
2. **Clear Error Messages**: Descriptive messages help with debugging
3. **HTTP Status Codes**: Proper REST API status codes
4. **Centralized Handling**: No try-catch blocks cluttering controllers
5. **Easy to Extend**: Add new exception types as needed

## Angular Integration

Update your Angular service error handlers to parse the new error format:

```typescript
findById(id: number) {
  return this.service
    .findById(id)
    .subscribe({
      next: response => this.managerSaved = response,
      error: errorResponse => {
        const error = errorResponse.error;
        console.log(`${error.error}: ${error.message}`);
        // Display to user: "Not Found: Manager not found with id: '5'"
      }
    });
}
```
