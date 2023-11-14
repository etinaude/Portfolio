import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import KEYS from '../../keys.json';
import { getFirestore, collection, query, getDocs, where, setDoc, doc } from 'firebase/firestore';
import type { ContactT, ProjectT } from '$lib/types/types';
import { getPerformance } from 'firebase/performance';
import { getAuth, signInWithPopup, GoogleAuthProvider, type UserCredential } from "firebase/auth";

const BASE_PATH = 'portfolio/all-data/';
// Initialize Firebase
const app = initializeApp(KEYS.firebase);
const db = getFirestore(app);

export function initAnalytics() {
	getPerformance(app);
	getAnalytics(app);
}

export function getAwardData() {
	return getData(BASE_PATH + 'awards');
}

export async function getSocialData() {
	const links: ContactT[] = (await getData(BASE_PATH + 'socials')) as ContactT[];

	return links.sort((a, b) => {
		if (a.index < b.index) return -1;
		return 1;
	});
}

export function getClubsData() {
	return getData(BASE_PATH + 'clubs');
}

export function getEducationData() {
	return getData(BASE_PATH + 'education');
}

export function getProjectsData() {
	return getData(BASE_PATH + 'projects');
}

export function getFeaturedProjectsData() {
	return getData(BASE_PATH + 'projects', where('featured', '==', true));
}

export function getWorkData() {
	return getData(BASE_PATH + 'work');
}

export async function getData(collectionPath: string, fbQuery?: any) {
	const data: (ProjectT | ContactT)[] = [];
	try {
		let q;
		if (fbQuery) {
			q = query(collection(db, collectionPath), fbQuery);
		} else {
			q = query(collection(db, collectionPath));
		}
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			data.push(doc.data() as ProjectT);
		});
	} catch (e) {
		console.error(e);
	}
	return data;
}

export async function addNewProject(project: ProjectT) {
	try {
		await setDoc(doc(db, BASE_PATH + "projects", project.title), project);
	} catch (e) {
		console.error(e);
	}
}


export async function auth(): Promise<boolean> {
	const auth = getAuth();
	const currentTime = new Date().getTime();
	const lastSignedIn = parseInt(sessionStorage.getItem("lastSignedIn") ?? "0");
	const lastUUID = sessionStorage.getItem("lastUUID");

	try {
		// only need to sign in once ~ an hour
		if (currentTime - lastSignedIn < (3000 * 1000) && lastUUID == "WFuEx") return true;

		const credential: UserCredential = await signInWithPopup(auth, new GoogleAuthProvider());
		const user = credential.user;
		const shortUID = user.uid.substring(0, 5);
		console.log(credential);
		// I ain't storing my full uid
		if (shortUID != "WFuEx")
			return false;

		sessionStorage.setItem("lastUUID", shortUID);
		sessionStorage.setItem("lastSignedIn", "" + currentTime);
		return true;

	}
	catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
		const email = error.customData.email;
		const credential = GoogleAuthProvider.credentialFromError(error);

		console.error(errorCode, errorMessage, email, credential)
		return false
	}

}