<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/dev-gaitano/firebase-notes-I">
    <img src="https://i.pinimg.com/736x/57/d8/4b/57d84b93155cdcdfdbd7cc611e3f0886.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Ascend.up</h3>

  <p align="center">
    A clean, minimal notes app built for focus and flow.
    <br />
    <br />
    <a href="https://github.com/dev-gaitano/firebase-notes-I /issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    &middot;
    <a href="https://github.com/dev-gaitano/firebase-notes-I/issues/new?labels=enhancement&template=feature-request---.md">Request Feature</a>
  </p>
</div>

<!-- PROJECT SHIELDS -->
<div align="center">

  <a href="https://github.com/dev-gaitano/firebase-notes-I/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Contributors">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/network/members">
    <img src="https://img.shields.io/github/forks/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Forks">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/stargazers">
    <img src="https://img.shields.io/github/stars/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Stars">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/issues">
    <img src="https://img.shields.io/github/issues/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="Issues">
  </a>
  <a href="https://github.com/dev-gaitano/firebase-notes-I/LICENSE">
    <img src="https://img.shields.io/github/license/dev-gaitano/firebase-notes-I.svg?style=for-the-badge" alt="License">
  </a>
  <a href="https://www.linkedin.com/in/eugene-gaitano">
    <img src="https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555" alt="LinkedIn">
  </a>

</div>

<br />
<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="project-structure">Project Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

In a world filled with cluttered interfaces and overwhelming features, Ascend.up takes a different approach.

### Built With

* HTML5
* CSS
* JavaScript
* Firebase

### Project Structure

```
firebase-notes-I/
├── .git/                   # Git repository data
├── functions/              # Cloud Functions directory
│   ├── .eslintrc.js        # Functions linting configuration
│   ├── index.js            # Main functions code
│   ├── package.json        # Functions package configuration
│   └── package-lock.json   # Functions dependency lock file
├── public/                 # Firebase Hosting static files
│   ├── css/                # Stylesheets
│   │   └── style.css       # Main stylesheet
│   ├── js/                 # Client-side JavaScript
│   │   ├── app.js          # Main application logic  
│   │   ├── authCheck.js    # Authentication check logic
│   │   ├── authForms.js    # Authentication forms logic  
│   │   ├── firebase-config.js # Firebase configuration  
│   │   ├── starryBackground.js # Starry background effect  
│   │   └── theme.js        # Theme management logic 
│   ├── media/              # Static assets (images, fonts, etc.)
│   │   ├── apple-icon.png  
│   │   ├── ascend-logo.png 
│   │   └── google-icon.png 
│   ├── pages/              # HTML pages
│   │   ├── forgotPassword.html # Password recovery page  
│   │   ├── getStarted.html # Get started page  
│   │   ├── signUp.html     # User sign-up page  
│   │   └── signIn.html     # User sign-in page 
│   └── index.html          # Main HTML file
├── .firebaserc             # Firebase project configuration
├── .gitignore              # Git ignore rules
├── database.rules.json     # Realtime Database security rules
├── firebase.json           # Firebase project configuration
├── firestore.indexes.json  # Firestore index definitions
├── firestore.rules         # Firestore security rules
├── LICENSE                 # Project license
├── package-lock.json       # Root dependency lock file
├── package.json            # Root package configuration
├── README.md               # Project documentation
├── remoteconfig.template.json # Remote Config template
└── storage.rules           # Cloud Storage security rules
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may approach setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

Clone this repo and push changes. 

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] CRUD Implementation
- [ ] Filter & Sort Notes
- [ ] Search Functionality
- [x] Firebase Implementation
    - [x] Firestore Database
    - [x] User Authentication

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT license. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Eugene Gaitano - dev.gaitano@gmail.com

Project Link:
[Ascend.up](https://ascendup.netlify.app/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[contributors-url]: https://github.com/dev-gaitano/firebase-notes-I/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[forks-url]: https://github.com/dev-gaitano/firebase-notes-I/network/members
[stars-shield]: https://img.shields.io/github/stars/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[stars-url]: https://github.com/dev-gaitano/firebase-notes-I/stargazers
[issues-shield]: https://img.shields.io/github/issues/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[issues-url]: https://github.com/dev-gaitano/firebase-notes-I/issues
[license-shield]: https://img.shields.io/github/license/dev-gaitano/firebase-notes-I.svg?style=for-the-badge
[license-url]: https://github.com/dev-gaitano/firebase-notes-I/blob/master/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/eugene-gaitano
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
