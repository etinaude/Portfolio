import { initializeApp } from 'firebase/app';
import KEYS from '../../keys.json';
import { getFirestore, collection, query, getDocs, setDoc, doc, where } from 'firebase/firestore';
import type { ContactT } from '$lib/types/types';

const BASE_PATH = 'portfolio/all-data/';
// Initialize Firebase
const app = initializeApp(KEYS.firebase);
const db = getFirestore(app);

export function getAwardData() {
	return getData(BASE_PATH + 'awards');
}

export async function getSocialData() {
	const links: ContactT[] = await getData(BASE_PATH + 'socials');

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
	try {
		const db = getFirestore(app);
		let q;
		if (fbQuery) {
			q = query(collection(db, collectionPath), fbQuery);
		} else {
			q = query(collection(db, collectionPath));
		}
		const querySnapshot = await getDocs(q);
		const data: any = [];
		querySnapshot.forEach((doc) => {
			data.push(doc.data());
		});
		return data;
	} catch (e) {
		console.error(e);
	}
}

export async function setData() {
	const linksImport: any = []; // rplace with data to upload
	const uploadCollection = 'projects';
	linksImport.forEach(async (link: any) => {
		const docInfo: any = {
			title: link.title,
			description: link.description,
			imageUrl: `https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/projects%2F${link.image_url}?alt=media`
		};
		if (link.hover_img) {
			docInfo[
				'hoverImg'
			] = `https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/projects%2F${link.hover_img}?alt=media`;
		}
		if (link.hover_video) {
			docInfo[
				'hoverVideo'
			] = `https://firebasestorage.googleapis.com/v0/b/portfolio-aa70a.appspot.com/o/projects%2F${link.hover_video}?alt=media`;
		}
		if (link.follow_url) {
			docInfo['followUrl'] = link.follow_url;
		}
		const name = link.title.trim().replace(' ', '');
		console.log(docInfo);
		await setDoc(doc(db, BASE_PATH + uploadCollection + '/' + name), docInfo);
	});
}
