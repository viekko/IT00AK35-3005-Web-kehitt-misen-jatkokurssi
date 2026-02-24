📘 README – How CRUD Data Flow Models Were Created (Phase 6)
This document explains how the CRUD data‑flow diagrams were produced,
what data they are based on, and how the system behavior was verified using real Phase6 application behavior.
The goal was to model the actual data flow of the Booking System’s Create, Read, Update, Delete operations, following the course requirements.

🔍 1. Tools and Methods Used
To document CRUD operations accurately, the following tools and methods were used:
✔️ 1. Chrome Developer Tools → Network tab
Used to capture:

real HTTP requests made by the frontend
method (GET/POST/PUT/DELETE)
endpoint (URL)
request payload (JSON)
response body
status codes (200, 201, 204, 400, 404, 409)

✔️ 2. Chrome Developer Tools → Console tab
Used to check:

JavaScript errors
validation messages
frontend behavior

✔️ 3. Source code inspection (Phase6 project)
Verified:

Express routes (routes/resources.js)
express‑validator backend validation rules
service layer (ResourceService)
SQL queries in the PostgreSQL layer

✔️ 4. UI Testing
Performed by manually:

creating a resource
reading the resource list
updating a resource
deleting a resource

The UI tests triggered real network calls, which were captured in DevTools.

🌐 2. What Real Network Data Was Collected?
Below is the exact Phase6 DevTools evidence used as the basis for the Mermaid diagrams.

🟢 READ (GET)
Source: Chrome DevTools → Network → XHR
When navigating to the resources page:
GET http://localhost:5000/api/resources
Status: 200 OK
Response: JSON list or []

This matches the backend route:
GET /api/resources

Phase6 never returns 404 for READ, but returns:

200 OK + data
200 OK + empty list

A 500 error case was added to the diagram as the required "failure branch".

🟠 UPDATE (PUT)
When clicking Update on a resource in the UI:
PUT http://localhost:5000/api/resources/1
Status: 200 OK
Payload: JSON (name, description, price, availability)

Backend also supports:

400 Bad Request for backend validation errors
404 Not Found if rowCount = 0
(Even if you cannot trigger this from UI, it is part of the backend data flow)


🔴 DELETE (DELETE)
When deleting an existing resource:
DELETE http://localhost:5000/api/resources/1
Status: 204 No Content

Backend also supports:

404 Not Found → if no DB row matches the ID
(Again: cannot trigger from UI, but backend logic includes it)


🟣 CREATE (POST)
When creating a new resource:
POST http://localhost:5000/api/resources
Status: 201 Created
Payload: JSON with all required fields

If backend validation fails:

400 Bad Request (from express‑validator)

If duplicate name:

409 Conflict (from service layer)


🧩 3. How Frontend and Backend Validation Interact
Frontend validation prevents many invalid cases (too short name, XSS attempts, missing fields).
Therefore, some backend validations could not be triggered via UI.
However:
👉 The assignment requires documenting backend validation anyway,
because it is part of the actual data flow of Phase6.
Thus, diagrams include:
Frontend validation branch
Backend validation branch
Success path
Failure path (400 / 404 / 500 depending on operation)
This produces diagrams faithful to the true backend behavior, even when the UI blocks invalid input before the request is sent.

🔐 4. Why Some Failure Cases Are Included Even If UI Cannot Trigger Them
The assignment requires:

“At least one failure/validation path for each CRUD operation.”

Phase6 backend supports failure cases like:

404 Not Found for UPDATE/DELETE
400 Bad Request for backend validation
500 Internal Server Error for DB failures

Even if UI cannot trigger them, they must be in the diagrams because:
✔️ They exist in the backend
✔️ They are part of the actual system data flow
✔️ They meet task’s requirement for failure branches

🗂 5. Summary of Verified Endpoints








































OperationMethodEndpointVerified viaNotesCREATEPOST/api/resourcesDevTools201, 400, 409READGET/api/resourcesDevToolsAlways 200 (data or empty)UPDATEPUT/api/resources/:idDevTools200, supports 400 + 404DELETEDELETE/api/resources/:idDevTools204, supports 404

🎉 6. Conclusion
All CRUD diagrams in G1_CRUD_DataFlow.md are based on:
✔️ Real observed HTTP traffic in DevTools
✔️ Actual Phase6 backend route logic
✔️ PostgreSQL query behavior (INSERT/SELECT/UPDATE/DELETE)
✔️ express‑validator rules
✔️ UI testing and frontend validation
✔️ Required error cases from assignment instructions
This README serves as a learning record of:

how the flow was analyzed
how the models were constructed
where each part of the data flow originates
