import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

interface UserDetails{
  name?:string;
  email:string;
  password:string
}

const signup = async (userDetails:UserDetails):Promise<void>=>{
  try {
    const res = await createUserWithEmailAndPassword(auth,userDetails.email,userDetails.password)
    const user = res.user
    await addDoc(collection(db,'user'),{
      uid: user.uid,
      name:userDetails.name,
      authProvider:'local',
      email:userDetails.email,
    })
  } catch (error:any) {
    console.error('signup error',error);
    toast.error(error.code)
  }
}

const login = async(userDetails:UserDetails):Promise<void>=>{
  try {
    await signInWithEmailAndPassword(auth,userDetails.email,userDetails.password)
  } catch (error:any) {
    console.error('login error',error);
    toast.error(error.code.split('/')[1].split('-').join(' '))
  }
}

const logout = async():Promise<void>=>{
  try {
    await signOut(auth)
  } catch (error:any) {
    console.error('logout error',error);
    toast.error(error.code)
  }
}

export {auth,db,login,signup,logout}