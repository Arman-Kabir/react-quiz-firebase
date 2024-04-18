import { initializeApp } from 'firebase/app';

// /firebase configuration

const app = initializeApp({
    apiKey: "AIzaSyBwo8rcFCc9xYLa1Xkh3CF3hp3StAvcu8k",
    authDomain: "react-quiz-dev-53210.firebaseapp.com",
    projectId: "react-quiz-dev-53210",
    storageBucket: "react-quiz-dev-53210.appspot.com",
    messagingSenderId: "827027098914",
    appId: "1:827027098914:web:9c829640b082596ca5e97b"
    // apiKey: "process.env.REACT_APP_API_KEY",
    // authDomain: "process.env.REACT_APP_AUTH_DOMAIN",
    // projectId: "process.env.REACT_APP_PROJECT_ID",
    // storageBucket: "process.env.REACT_APP_STORAGE_BUCKET",
    // messagingSenderId: "process.env.REACT_APP_MESSAGING_SENDER_ID",
    // appId: "process.env.REACT_APP_ID"
});

export default app;