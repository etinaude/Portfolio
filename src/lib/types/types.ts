export type ProjectT = {
	title: string;
	description: string;
	imageUrl: string;

	hoverImg?: string;
	hoverVideo?: string;
	followUrl?: string;
	featured?: boolean;
	tags?: string[];

	media?: string[];
	tldr?: string;
	priority?: number;
};

export type LinkT = {
	title: string;
	description: string;
	imageUrl: string;
	url: string;
};

export type Tags = "Hardware" | "Software" | "Web" | "Mobile" | "Wood Work" | "Art" | "Design" | "Other";

export type ContactT = {
	displayUrl: string;
	icon: string;
	name: string;
	url: string;
	user: string;
	index: number;
};

export type LongCardT = ProjectT & {
	side: 'left' | 'right';
};

export class BannerT {
	style: string;
	text: string;
	display: boolean;

	constructor() {
		this.style = '';
		this.text = '';
		this.display = false;
	}
}

export class ContactFormT {
	name: string;
	email: string;
	message: string;

	constructor() {
		this.name = '';
		this.email = '';
		this.message = '';
	}
}

export type posT = {
	x: number;
	y: number;
	clickable: boolean;
};
