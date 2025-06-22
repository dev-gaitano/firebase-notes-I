# Firebase Notes

## Project Structure

```
firebase-notes/
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
