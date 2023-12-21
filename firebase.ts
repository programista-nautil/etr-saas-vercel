import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBKa7Rg3pDf0qxjAJ7SNZs8KN6RnfWvoqw',
	authDomain: 'etr-saas.firebaseapp.com',
	projectId: 'etr-saas',
	storageBucket: 'etr-saas.appspot.com',
	messagingSenderId: '688618449313',
	appId: '1:688618449313:web:baa8055f0b32f51ed243e0',
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
