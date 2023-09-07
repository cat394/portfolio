export type Image = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export type Creation = {
	title: string;
	description: string;
	url: string;
	skills: string[];
	images: Image[];
};

export const creations: Creation[] = [
	{
		title: '待ち人',
		description:
			'文章と画像と音で楽しむ新しい形のWebサイト。シナリオは私のオリジナルであり、それに合わせた落ち着いた雰囲気を醸し出しています。',
		url: 'https://machibito.app',
		skills: ['Astro', 'Svelte', 'Daisy UI'],
		images: [
			{ src: '/assets/images/machibito1.webp', alt: '待ち人の画像１', width: 1000, height: 555 },
			{ src: '/assets/images/machibito2.webp', alt: '待ち人の画像２', width: 1000, height: 555 },
			{ src: '/assets/images/machibito3.webp', alt: '待ち人の画像３', width: 1000, height: 555 },
			{ src: '/assets/images/machibito4.webp', alt: '待ち人の画像４', width: 1000, height: 555 }
		]
	},
	{
		title: 'Vell mo',
		description:
			'行きつけの美容室のWebサイトを作りました。シンプルながらもカラフルで可愛らしいデザインになっています。ダークテーマもあるので目に優しいのも特徴です。',
		url: 'https://vellmo.netlify.app',
		skills: ['React'],
		images: [
			{ src: '/assets/images/vellmo1.webp', alt: 'Vell moの画像１', width: 1000, height: 555 },
			{ src: '/assets/images/vellmo2.webp', alt: 'Vell moの画像２', width: 1000, height: 555 },
			{ src: '/assets/images/vellmo3.webp', alt: 'Vell moの画像３', width: 1000, height: 555 },
			{ src: '/assets/images/vellmo4.webp', alt: 'Vell moの画像４', width: 1000, height: 555 }
		]
	}
];
