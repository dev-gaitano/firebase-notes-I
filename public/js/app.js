import { db } from "./firebase-config.js";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Theme Toggle
const themeButton = document.getElementById('theme-button');
const body = document.body;
const lightThemeIcon = document.getElementById('light-theme-icon')
const darkThemeIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
darkThemeIcon.setAttribute("id", "dark-theme-icon");
darkThemeIcon.setAttribute("class", "icon-primary");
darkThemeIcon.setAttribute("viewBox", "0 0 24 24");
darkThemeIcon.setAttribute("fill", "none");

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute("d", "M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z");
path.setAttribute("fill", "none");
path.setAttribute("stroke", "currentColor");
path.setAttribute("stroke-width", "2");
path.setAttribute("stroke-linecap", "round");
path.setAttribute("stroke-linejoin", "round");

darkThemeIcon.appendChild(path);

themeButton.addEventListener('click', () => {
  const isLight = body.classList.toggle('light');

  if (isLight) {
    lightThemeIcon.replaceWith(darkThemeIcon);
  } else {
    darkThemeIcon.replaceWith(lightThemeIcon);
  }
});


// Animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  });
})

const hiddenElements = document.querySelectorAll('hidden')
hiddenElements.forEach((element) => {
  observer.observe(element)
});


// Reference to the Firestore collection
const notesCol = collection(db, "notes");

// DOM elements using IDs
const newNoteInput = document.getElementById("new-note-input");
const newNoteButton = document.getElementById("new-note-button");
const notesContainer = document.getElementById("notes-list");
const editModal = document.getElementById("edit-modal");
const editTitleInput = document.getElementById("edit-title");
const editTextInput = document.getElementById("edit-text");
const saveEditBtn = document.getElementById("save-edit");
const cancelEditBtn = document.getElementById("cancel-edit");

let currentEditNoteId = null;
let creatingNewNote = false;

// Create a note
const addNote = async (noteText) => {
  if (!noteText.trim()) return;
  await addDoc(notesCol, {
    title: "Untitled",
    text: noteText,
    timestamp: Date.now()
  });
  getNotes(); // Refresh notes after adding
};

// Read and render notes
const getNotes = async () => {
  notesContainer.innerHTML = ""; // Clear existing notes

  const snapshot = await getDocs(notesCol);
  snapshot.forEach(docSnap => {
    const noteData = docSnap.data();
    const noteId = docSnap.id;

    const fullText = noteData.text;
    const preview = fullText.length > 50
      ? fullText.slice(0, 50) + "..."
      : fullText;

    // Format timestamp
    const date = new Date(noteData.timestamp);
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short", month: "short", day: "numeric"
    });

    // Create note element
    const noteEl = document.createElement("li");
    noteEl.addEventListener("click", () => {
      editNotePrompt(noteId, noteData.title, fullText);
    });
    noteEl.className = "note-item";
    noteEl.innerHTML = `
      <div id="note-header">
        <h2 id="note-title" class="montserrat-semi-bold">${noteData.title}</h2>
        <button id="delete-button" onclick="deleteNote('${noteId}')"> 
          <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2">

            <path d="M3 6h18"/>
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>

            <line x1="10" x2="10" y1="11" y2="17"/>
            <line x1="14" x2="14" y1="11" y2="17"/>
          </svg>
        </button>
      </div>
      <p id="note-preview" class="montserrat-regular">${preview}</p>
      <p id="last-edited" class="montserrat-regular">${formattedDate}</p>
      <!-- <button onclick="editNotePrompt('${noteId}', \`${fullText}\`)">Edit</button> -->
    `;

    notesContainer.appendChild(noteEl);
  });
};

// Delete a note
window.deleteNote = async (id) => {
  await deleteDoc(doc(db, "notes", id));
  getNotes();
};

// Prompt to edit a note
window.editNotePrompt = (id, oldTitle, oldText) => {
  currentEditNoteId = id;
  editTitleInput.value = oldTitle;
  editTextInput.value = oldText;
  editModal.classList.remove("hidden");
};

// Update a note
const updateNote = async (id, newText) => {
  await updateDoc(doc(db, "notes", id), {
    text: newText,
    timestamp: Date.now()
  });
  getNotes();
};

// Add button event
newNoteButton.addEventListener("click", () => {
  const noteText = newNoteInput.value.trim()
  
  if (noteText) {
    addNote(newNoteInput.value);
    newNoteInput.value = "";
  } else {
    // Show edit modal in "new note" mode
    creatingNewNote = true;
    currentEditNoteId = null;
    editTitleInput.value = "";
    editTextInput.value = "";
    editModal.classList.remove("hidden");
  }
});

// Edit Note Modal Buttons event
saveEditBtn.addEventListener("click", async () => {
  const newTitle = editTitleInput.value.trim() || "Untitled";
  const newText = editTextInput.value.trim();
  if (!newText) return;

  if (creatingNewNote) {
    await addDoc(notesCol, {
      title: newTitle,
      text: newText,
      timestamp: Date.now()
    });
    creatingNewNote = false;
  } else {
    await updateDoc(doc(db, "notes", currentEditNoteId), {
        title: newTitle,
        text: newText,
        timestamp: Date.now()
      }
    );
  };

  editModal.classList.add("hidden");
  getNotes();
});

cancelEditBtn.addEventListener("click", () => {
  editModal.classList.add("hidden");
});

// Click outside to exit Modal
window.addEventListener("click", (e) => {
  if (e.target === editModal) {
    editModal.classList.add("hidden");
  }
});

// Load notes on page load
getNotes();
