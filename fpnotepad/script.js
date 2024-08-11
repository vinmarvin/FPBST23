body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    margin: 0;
    padding: 0;
    color: #333;
}

.app-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 20px;
}

.app-header {
    background-color: #4caf50;
    color: white;
    text-align: center;
    padding: 15px;
    border-radius: 8px 8px 0 0;
}

.app-main {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.note-form-section {
    margin-bottom: 20px;
}

.note-input {
    width: 100%;
    padding: 12px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 16px;
}

.save-button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.save-button:hover {
    background-color: #45a049;
}

.search-section {
    margin-bottom: 20px;
}

.search-input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    box-sizing: border-box;
}

.notes-section {
    margin-top: 20px;
}

.notes-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.notes-list li {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 10px;
    position: relative;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.notes-list li strong {
    display: block;
    margin-bottom: 10px;
    font-size: 18px;
    color: #333;
}

.notes-list li p {
    margin: 0;
    font-size: 16px;
    color: #555;
}

.delete-note {
    position: absolute;
    right: 10px;
    top: 10px;
    background-color: #f44336;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
}

.delete-note:hover {
    background-color: #c62828;
}
