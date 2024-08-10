* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 20px;
}

header {
    text-align: center;
    margin-bottom: 20px;
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
}

header input {
    padding: 10px;
    width: 80%;
    max-width: 400px;
    margin-top: 10px;
}

.note-form {
    margin-bottom: 20px;
}

.note-form input, .note-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
}

.note-form button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
}

.note-form button:hover {
    background-color: #0056b3;
}

.notes-list {
    margin-top: 20px;
}

.notes-list h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
}

.notes-list ul {
    list-style: none;
}

.notes-list ul li {
    background-color: white;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    position: relative;
}

.notes-list ul li .delete-note {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
}

.notes-list ul li .delete-note:hover {
    background-color: darkred;
}

@media (max-width: 768px) {
    header input {
        width: 100%;
    }

    .note-form input, .note-form textarea, .note-form button {
        width: 100%;
    }
}
