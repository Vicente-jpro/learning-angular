# Learn API - Manager & Employee CRUD

A RESTful API built with Spring Boot for managing Managers and Employees with a one-to-many relationship.

## 📋 Table of Contents
- [Overview](#overview)
- [Technologies](#technologies)
- [Database Schema](#database-schema)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#requestresponse-examples)
- [H2 Console Access](#h2-console-access)

## 🎯 Overview

This application provides a complete CRUD (Create, Read, Update, Delete) REST API for managing managers and their employees. A manager can have multiple employees, implementing a one-to-many relationship.

## 🛠 Technologies

- **Java 17**
- **Spring Boot 3.5.7**
- **Spring Data JPA** - Data persistence
- **Spring Web** - REST API
- **H2 Database** - In-memory database
- **Lombok** - Reduce boilerplate code
- **Maven** - Dependency management

## 📊 Database Schema

### Manager Entity
```
managers
├── id (Long, Primary Key, Auto-increment)
├── name (String, Not Null)
├── email (String, Not Null, Unique)
└── department (String)
```

### Employee Entity
```
employees
├── id (Long, Primary Key, Auto-increment)
├── name (String, Not Null)
├── email (String, Not Null, Unique)
├── position (String)
└── manager_id (Long, Foreign Key → managers.id)
```

### Relationship
- **One Manager** can have **Many Employees**
- **Many Employees** belong to **One Manager**

## 🚀 Getting Started

### Prerequisites
- Java 17 or higher
- Maven 3.6+

### Running the Application

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd learn-api
   ```

2. **Run with Maven**
   ```bash
   ./mvnw spring-boot:run
   ```
   Or on Windows:
   ```powershell
   .\mvnw.cmd spring-boot:run
   ```

3. **Access the API**
   - Base URL: `http://localhost:8080`
   - H2 Console: `http://localhost:8080/h2-console`

### Configuration

The application is configured in `src/main/resources/application.properties`:

```properties
# Server Configuration
server.port=8080

# H2 Database
spring.datasource.url=jdbc:h2:mem:learndb
spring.datasource.username=sa
spring.datasource.password=

# JPA Settings
spring.jpa.hibernate.ddl-auto=create-drop
spring.jpa.show-sql=true

# H2 Console
spring.h2.console.enabled=true
spring.h2.console.path=/h2-console
```

## 📡 API Endpoints

### Manager Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/managers` | Get all managers |
| GET | `/api/managers/{id}` | Get manager by ID |
| POST | `/api/managers` | Create a new manager |
| PUT | `/api/managers/{id}` | Update manager |
| DELETE | `/api/managers/{id}` | Delete manager |

### Employee Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees |
| GET | `/api/employees/{id}` | Get employee by ID |
| GET | `/api/employees/manager/{managerId}` | Get all employees by manager ID |
| POST | `/api/employees` | Create a new employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

## 📝 Request/Response Examples

### Create Manager

**Request:**
```http
POST /api/managers
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "department": "Engineering"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@company.com",
  "department": "Engineering"
}
```

### Create Employee

**Request:**
```http
POST /api/employees
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane.smith@company.com",
  "position": "Software Developer",
  "managerId": 1
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Jane Smith",
  "email": "jane.smith@company.com",
  "position": "Software Developer",
  "managerId": 1
}
```

### Get All Managers

**Request:**
```http
GET /api/managers
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@company.com",
    "department": "Engineering"
  },
  {
    "id": 2,
    "name": "Sarah Wilson",
    "email": "sarah.wilson@company.com",
    "department": "Marketing"
  }
]
```

### Get Employees by Manager

**Request:**
```http
GET /api/employees/manager/1
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Jane Smith",
    "email": "jane.smith@company.com",
    "position": "Software Developer",
    "managerId": 1
  },
  {
    "id": 2,
    "name": "Bob Johnson",
    "email": "bob.johnson@company.com",
    "position": "Senior Developer",
    "managerId": 1
  }
]
```

### Update Manager

**Request:**
```http
PUT /api/managers/1
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john.doe@company.com",
  "department": "Technology"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@company.com",
  "department": "Technology"
}
```

### Update Employee

**Request:**
```http
PUT /api/employees/1
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane.smith@company.com",
  "position": "Senior Software Developer",
  "managerId": 1
}
```

**Response:**
```json
{
  "id": 1,
  "name": "Jane Smith",
  "email": "jane.smith@company.com",
  "position": "Senior Software Developer",
  "managerId": 1
}
```

### Delete Manager

**Request:**
```http
DELETE /api/managers/1
```

**Response:**
```http
HTTP/1.1 204 No Content
```

### Delete Employee

**Request:**
```http
DELETE /api/employees/1
```

**Response:**
```http
HTTP/1.1 204 No Content
```

## 🗄 H2 Console Access

The H2 database console is enabled for development and debugging purposes.

1. **Access URL:** `http://localhost:8080/h2-console`
2. **JDBC URL:** `jdbc:h2:mem:learndb`
3. **Username:** `sa`
4. **Password:** *(leave empty)*

## 🏗 Project Structure

```
learn-api/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/example/learn_api/
│   │   │       ├── LearnApiApplication.java
│   │   │       ├── controller/
│   │   │       │   ├── ManagerController.java
│   │   │       │   └── EmployeeController.java
│   │   │       ├── dto/
│   │   │       │   ├── ManagerDTO.java
│   │   │       │   └── EmployeeDTO.java
│   │   │       ├── entity/
│   │   │       │   ├── Manager.java
│   │   │       │   └── Employee.java
│   │   │       ├── repository/
│   │   │       │   ├── ManagerRepository.java
│   │   │       │   └── EmployeeRepository.java
│   │   │       └── service/
│   │   │           ├── ManagerService.java
│   │   │           └── EmployeeService.java
│   │   └── resources/
│   │       └── application.properties
│   └── test/
│       └── java/
│           └── com/example/learn_api/
│               └── LearnApiApplicationTests.java
├── pom.xml
└── README.md
```

## 🔧 Architecture

The application follows a layered architecture:

1. **Controller Layer** - REST endpoints, handles HTTP requests/responses
2. **Service Layer** - Business logic, transaction management
3. **Repository Layer** - Data access using Spring Data JPA
4. **Entity Layer** - JPA entities representing database tables
5. **DTO Layer** - Data Transfer Objects for API communication

## 🌐 CORS Configuration

CORS is enabled for all origins (`@CrossOrigin(origins = "*")`) to allow frontend applications (like Angular) to consume the API during development.

For production, update the CORS configuration to specific origins:
```java
@CrossOrigin(origins = "http://your-angular-app.com")
```

## 📌 Important Notes

- The database is **in-memory** and resets on application restart
- `spring.jpa.hibernate.ddl-auto=create-drop` creates fresh tables on startup and drops them on shutdown
- Email fields are unique - duplicate emails will cause constraint violations
- Deleting a manager will cascade delete all associated employees
- Employee's manager field is optional (can be null)

## 🧪 Testing

Run tests with:
```bash
./mvnw test
```

Or on Windows:
```powershell
.\mvnw.cmd test
```

## 📄 License

This project is created for learning purposes.

## 👥 Contributing

Feel free to fork this project and submit pull requests for improvements.

---

**Made with ❤️ for learning Spring Boot**
