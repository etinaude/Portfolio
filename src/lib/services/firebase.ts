import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import KEYS from '../../keys.json';
import { getFirestore, collection, query, getDocs, where } from 'firebase/firestore';
import type { ContactT, ProjectT } from '$lib/types/types';
import { getPerformance } from 'firebase/performance';

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
