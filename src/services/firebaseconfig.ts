import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"
import {getFunctions} from "firebase/functions"
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check"
// import {getAnalytics} from "firebase/analytics"
// const appCToken = process.env.NODE_ENV==='development' ? import.meta.env.VITE_RECAPTCHA_DEBUG_TOKEN : ''; 
const firebaseConfig = {
  projectId: "stein-unlimited",
  appId: import.meta.env.VITE_FB_APPID as string,
  databaseURL: import.meta.env.VITE_UN_FB_DATABASEURL as string,
  storageBucket: import.meta.env.VITE_FB_STORAGEBUCKET as string,
  apiKey: import.meta.env.VITE_FB_APIKEY as string,
  authDomain: "stein-unlimited.firebaseapp.com",
  messagingSenderId: import.meta.env.VITE_FB_MESSAGINGSENDERID as string,
  measurementId: import.meta.env.VITE_FB_MEASUREMENTID as string,
  // DEV ONLY!
  // appCheckToken: appCToken
}
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
export { auth }
const firestoreDb = getFirestore(firebaseApp)
export { firestoreDb }
const storage = getStorage(firebaseApp)
export { storage }
const realtimeDb = getDatabase(firebaseApp)
export { realtimeDb }
// const analytics = getAnalytics(firebaseApp)
const fireFunctions = getFunctions(firebaseApp)
export { fireFunctions }

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
if(process.env.NODE_ENV==='development') {
  // self.FIREBASE_APPCHECK_DEBUG_TOKEN = import.meta.env.VITE_RECAPTCHA_DEBUG_TOKEN;
  // const appCheck = initializeAppCheck(firebaseApp, {
  //   provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_DEBUG_TOKEN),
  //   isTokenAutoRefreshEnabled: true
  // })
} else {
  const appCheck = initializeAppCheck(firebaseApp, {
    provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA),
    isTokenAutoRefreshEnabled: true
  })  
}
