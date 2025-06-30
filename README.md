# Ascend.up

Ascend.up is a clean, minimal notes app built for focus and flow. Write, organize, and revisit your thoughts anytime.

## Project Structure

```
firebase-notes-I/
├── extensions/              # Firebase Extensions directory
├── functions/               # Cloud Functions directory
│   ├── node_modules/        # Functions dependencies
│   ├── .eslintrc.js        # Functions linting configuration
│   ├── index.js            # Main functions code
│   ├── package.json        # Functions package configuration
│   └── package-lock.json   # Functions dependency lock file
├── public/                 # Firebase Hosting static files
│   ├── assets/             # Static assets (images, fonts, etc.)
│   ├── css/                # Stylesheets
│   │   └── style.css       # Main stylesheet
│   ├── js/                 # Client-side JavaScript
│   │   ├── app.js          # Main application logic
│   │   └── firebase-config.js # Firebase initialization
│   └── index.html          # Main HTML file
├── .firebaserc             # Firebase project configuration
├── .git/                   # Git repository data
├── .gitignore              # Git ignore rules
├── LICENSE.md              # Project license
├── README.md               # Project documentation
├── database.rules.json     # Realtime Database security rules
├── firebase.json           # Firebase configuration file
├── firestore.indexes.json  # Firestore index definitions
├── firestore.rules         # Firestore security rules
├── node_modules/           # Root project dependencies
├── package.json            # Root package configuration
├── package-lock.json       # Root dependency lock file
├── remoteconfig.template.json # Remote Config template
└── storage.rules           # Cloud Storage security rules
```

## How can I edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/dev-gaitano/firebase-notes-I.git

# Step 2: Navigate to the project directory.
cd firebase-notes-I

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npx serve public
```

## What technologies are used for this project?

This project is built with .

- HTML
- CSS
- JavaScript
- Firebase

