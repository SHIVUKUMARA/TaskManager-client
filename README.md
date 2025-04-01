# Task Manager Web App - Frontend  

## 🌟 Overview  
This is the **frontend** of the Task Manager Web App, built using **React.js**. It provides a clean, responsive UI for users to manage their tasks efficiently. The app allows users to **sign up, log in, create, update, delete, and view tasks**, ensuring a smooth user experience with authentication and API integration.  

## 🚀 Features  
- **User Authentication:** Signup and login functionality using JWT.  
- **Task Management:** Users can add, edit, delete, and view their tasks.  
- **Dashboard UI:** A structured UI displaying tasks in an organized manner.  
- **Protected Routes:** Only authenticated users can access the dashboard and manage tasks.  
- **API Integration:** Fetches tasks from the backend and syncs real-time changes.  
- **Responsive Design:** Optimized for both desktop and mobile devices.  

## 🛠️ Tech Stack  
- **React.js** - UI development  
- **React Router** - Navigation and protected routes  
- **Bootstrap / Tailwind CSS** - Styling and responsiveness  
- **Axios** - API calls to the backend  
- **React Toastify** - Notifications for user actions  

## 🎨 UI Preview  
You can check out the **live version** of the app here:  
🔗 [Live App](https://shivukumara-taskmanager.netlify.app/)  

## 📦 Installation & Setup  
1. Clone the repository:  
   ```bash
   git clone https://github.com/SHIVUKUMARA/TaskManager-client.git
   cd TaskManager-client
   ```
2. Install dependencies:  
   ```bash
   npm install
   ```
3. Start the development server:  
   ```bash
   npm start
   ```
  
## 📌 Folder Structure  
```
Task Manager/
├─ client/
│  ├─ public/
│  │  ├─ index.html
│  │  ├─ manifest.json
│  │  └─ robots.txt
│  ├─ src/
│  │  ├─ Components/
│  │  │  ├─ Dashboard.jsx
│  │  │  ├─ Edittask.jsx
│  │  │  ├─ Header.jsx
│  │  │  ├─ Login.jsx
│  │  │  ├─ Pnf.jsx
│  │  │  ├─ PrivateRoute.jsx
│  │  │  ├─ Register.jsx
│  │  │  ├─ Taskform.jsx
│  │  │  └─ Tasklist.jsx
│  │  ├─ Context/
│  │  │  └─ LoginContext.jsx
│  │  ├─ services/
│  │  │  └─ api.jsx
│  │  ├─ App.css
│  │  ├─ App.js
│  │  ├─ App.test.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ logo.svg
│  │  ├─ reportWebVitals.js
│  │  └─ setupTests.js
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  └─ README.md
```

## 🤝 Contributing  
Feel free to fork this repository and improve the project! If you find any issues, open a pull request or report them.  

## 📜 License  
This project is open-source and free to use.  
