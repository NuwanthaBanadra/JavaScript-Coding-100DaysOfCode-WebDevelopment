const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notesContainer.innerHTML = "";
    notes.forEach((text, index) => addNote(text, index));
}

function addNote(text = "", index = null) {
    const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.oninput = saveNotes;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];
        notes.splice(index ?? notes.length - 1, 1);
        localStorage.setItem("notes", JSON.stringify(notes));
        loadNotes();
    };

    noteDiv.appendChild(deleteBtn);
    noteDiv.appendChild(textarea);
    notesContainer.appendChild(noteDiv);
}

function saveNotes() {
    const texts = Array.from(document.querySelectorAll(".note textarea")).map(t => t.value);
    localStorage.setItem("notes", JSON.stringify(texts));
}

addNoteBtn.addEventListener("click", () => {
    addNote();
    saveNotes();
});

window.onload = loadNotes;
