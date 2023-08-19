```mermaid
sequenceDiagram
participant user
participant browser
participant server

    user->>browser: Input notes to the note input text box
    user->>browser: User click the save button
    activate browser
    Note spa.js initiate the callback function to add new note to the list
    browser->browser: redraw the note list



    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp//exampleapp/new_note_spa
    activate server
    server-->>browser: {"message":"note created"}
    deactivate server

```
