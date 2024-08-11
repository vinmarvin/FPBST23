document.addEventListener('DOMContentLoaded', () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];

    const saveNoteButton = document.getElementById('save-note');
    const notesList = document.getElementById('notes');
    const searchInput = document.getElementById('search');

    function renderNotes(filter = '') {
        notesList.innerHTML = '';
        notes
            .filter(note => note.title.toLowerCase().includes(filter.toLowerCase()))
            .slice()
            .reverse()
            .forEach((note, index) => {
                const noteItem = document.createElement('li');
                noteItem.innerHTML = `
                    <strong>${note.title}</strong>
                    <p>${note.content}</p>
                    <button class="delete-note" data-index="${index}">Delete</button>
                `;
                notesList.appendChild(noteItem);
            });
    }    

    function saveNote() {
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-content').value;

        if (title && content) {
            notes.push({ title, content });
            localStorage.setItem('notes', JSON.stringify(notes));
            document.getElementById('note-title').value = '';
            document.getElementById('note-content').value = '';
            renderNotes();
        }
    }

    function deleteNote(index) {
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    }

    notesList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-note')) {
            const index = e.target.dataset.index;
            deleteNote(index);
        }
    });

    searchInput.addEventListener('input', (e) => {
        renderNotes(e.target.value);
    });

    saveNoteButton.addEventListener('click', saveNote);
    
    renderNotes();
});
