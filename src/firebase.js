import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAZn_irGav6ZvizroDpIcHWQQUmHo5FLLE",
    authDomain: "znajdz-nerda.firebaseapp.com",
    projectId: "znajdz-nerda",
    storageBucket: "znajdz-nerda.appspot.com",
    messagingSenderId: "594610322334",
    appId: "1:594610322334:web:ba81440097475c630f748f",
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
