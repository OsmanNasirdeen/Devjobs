# ![Project Image](./demo_img/project_tablet.png)

# Devjobs web app

> A job board for developers showing job vacancies to job seekers. Users can search and apply for new job opportunities in their area and profession.
>
> #### Visit site to Check live demo [_here_](https://amali-devjobs.netlify.app/).

---

# Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Screenshots](#screenshots)
- [Setup](#setup)
- [How To Use](#how-to-use)
- [Project Status](#project-status)
- [License](#license)
- [Author](#author)

---

# Description

A job board for employers to promote job vacancies to job seekers. Job seekers can search for new job opportunities in their area and profession, read about the position and be directed to the employer’s application website.

---

# Technologies Used

### engines

- node: ">=6.0.0"

The Project is created with:

- vite: "^4.3.2"
- react: "^18.2.0"
- react-dom: "^18.2.0"
- react-router-dom: "^6.11.2"
- Javascript
- CSS

---

# Features

- Responsive :

  - Adapts to devices of all sizes from mobile to desktop

- browser compatible:

  - fully functional on all modern browsers such as Google Chrome , Edge

- users can filter data to their requirements

- Details page to read more about a position

- Dark mode

---

# Screenshots

![project_img](./demo_img/project_detailspage.png)

### dark mode

---

![project_img](./demo_img/dark-mode_2.png)

---

### mobile

---

![project_img](./demo_img/project_mobile.png)

---

[Back To The Top](#devjobs-web-app)

# Setup

To clone and run this application, you'll need to first have Git and Node.js (npm) installed on your computer. From your command line type the following:

## Clone this repository

$ git clone https://github.com/OsmanNasirdeen/Devjobs

## Go into the repository

$ cd ./devjobs

## Install dependencies

$ npm install

## Run the app

$ npm run dev

```
$ cd ./devjobs
$ npm install
$ npm run dev
```

---

# How To Use

## References

### Back-end

---

` server/API to get the project data`:

```javascript
const serverUrl = https://server-devjobs.onrender.com
```

The data of the project is hosted on this server [VISIT SERVER](https://server-devjobs.onrender.com) which provides different API's to served various data to the front-end.
The server is built using the following technologies:

- node js
- express
- json data

`To learn more about the server`:
[Visit Server Github Repo](https://github.com/OsmanNasirdeen/devjobs-server)

[Back To The Top](#devjobs-web-app)

## API Reference

```javascript
// get all data from API
const getAllData = fetch(`https://server-devjobs.onrender.com/`);

// get all data which match specific location from API
const specificLocationData = fetch(
  `https://server-devjobs.onrender.com/locations/locationName`
);
// get all data that includes certain keywords from API
const certainCategoryData = fetch(
  `https://server-devjobs.onrender.com/category/categoryName`
);
```

### API Demo

---

#### ` (1) This will return an array of all data whose location is Ghana from The server`;

```javascript
const locationName = "Ghana";
const specificLocationData = fetch(
  `https://server-devjobs.onrender.com/locations/${locationName}`
);
```

#### (2) `This will return an array of all data whose position name contains the keyword "software engineer" from The sever`

```javascript
const categoryName = "software engineer";
const certainCategoryData = fetch(
  `https://server-devjobs.onrender.com/category/${categoryName}`
);
```

[Back To The Top](#devjobs-web-app)

---

# Project Status

Project is: completed

---

# License

MIT License

Copyright (c) [2023] AmaliTech

---

# Author

- LinkedIn - [Osman Nasirdeen](https://www.linkedin.com/in/osman-nasirdeen/)
- Github - [OsmanNasirdeen](https://github.com/OsmanNasirdeen)

[Back To The Top](#devjobs-web-app)
