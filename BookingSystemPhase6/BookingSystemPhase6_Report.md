# 1️⃣ CREATE – Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (form.js)
    participant B as Backend Route (POST /api/resources)
    participant V as express-validator
    participant S as ResourceService
    participant DB as PostgreSQL

    U->>F: Submit "Create Resource" Form
    F->>B: POST /api/resources (JSON)

    B->>V: Validate input
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation messages
    else Validation OK
        B->>S: createResource(data)
        S->>DB: INSERT INTO resources
        DB-->>S: Insert result / duplicate error

        alt Duplicate found
            S-->>B: Duplicate error
            B-->>F: 409 Conflict
            F-->>U: Show duplicate warning
        else Success
            S-->>B: Resource created
            B-->>F: 201 Created + JSON
            F-->>U: Show success message
        end
    end
```

# 2️⃣ READ — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (resources.js)
    participant B as Backend Route (GET /api/resources)
    participant S as ResourceService
    participant DB as PostgreSQL

    U->>F: Open /resources page
    F->>B: GET /api/resources

    B->>S: getAllResources()
    S->>DB: SELECT * FROM resources
    DB-->>S: Rows[]

    alt Data found
        S-->>B: Return resources[]
        B-->>F: 200 OK + JSON
        F-->>U: Render list of resources
    else No data
        S-->>B: Empty array
        B-->>F: 200 OK + []
        F-->>U: Show "No resources found"
    end
```

# 3️⃣ UPDATE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (resources.js)
    participant B as Backend Route (PUT /api/resources/:id)
    participant V as express-validator
    participant S as ResourceService
    participant DB as PostgreSQL

    U->>F: Edit resource in UI
    F->>B: PUT /api/resources/1 (JSON)

    B->>V: Validate incoming data
    V-->>B: Validation result

    alt Validation fails
        B-->>F: 400 Bad Request + errors[]
        F-->>U: Show validation errors
    else Validation OK
        B->>S: updateResource(id, data)
        S->>DB: UPDATE resources SET ... WHERE id=1
        DB-->>S: Update result (0 or 1 rows)

        alt Resource not found
            S-->>B: No rows updated
            B-->>F: 404 Not Found
            F-->>U: Show "Resource not found"
        else Success
            S-->>B: Updated resource object
            B-->>F: 200 OK + JSON
            F-->>U: Show "Update successful"
        end
    end
```

# 4️⃣ DELETE — Resource (Sequence Diagram)

```mermaid
sequenceDiagram
    participant U as User (Browser)
    participant F as Frontend (resources.js)
    participant B as Backend Route (DELETE /api/resources/:id)
    participant S as ResourceService
    participant DB as PostgreSQL

    U->>F: Click Delete for resource #1
    F->>B: DELETE /api/resources/1

    B->>S: deleteResource(id)
    S->>DB: DELETE FROM resources WHERE id=1
    DB-->>S: Result (rowCount)

    alt Resource existed
        S-->>B: rowCount = 1
        B-->>F: 204 No Content
        F-->>U: Remove row from UI
    else Resource not found
        S-->>B: rowCount = 0
        B-->>F: 404 Not Found
        F-->>U: Show "Resource not found"
    end
```


alt Client validation fails
    F-->>U: Show validation error
    Note over F,B: No HTTP request sent

