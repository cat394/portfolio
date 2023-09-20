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
			'文章と画像と音で楽しむ新しい形のWebサイト。シナリオは私のオリジナルであり、それに合わせた落ち着いた雰囲気でありながらもアクセントにピンクや紫を使うことで甘酸っぱさみたいなのも表現しました。',
		url: 'https://machibito.app',
		skills: ['Astro', 'Svelte', 'Daisy UI'],
		images: [
			{ src: '/assets/images/machibito1.webp', alt: '待ち人の画像1', width: 1000, height: 555 },
			{ src: '/assets/images/machibito2.webp', alt: '待ち人の画像2', width: 1000, height: 555 },
			{ src: '/assets/images/machibito3.webp', alt: '待ち人の画像3', width: 1000, height: 555 },
			{ src: '/assets/images/machibito4.webp', alt: '待ち人の画像4', width: 1000, height: 555 }
		]
	},
	{
		title: 'Vell mo',
		description:
			'行きつけの美容室のWebサイトを作りました。シンプルながらもカラフルで可愛らしいデザインになっています。ナビゲーションは直感的であり、ダークテーマもあるので目に優しいのも特徴です。',
		url: 'https://vellmo.netlify.app',
		skills: ['React'],
		images: [
			{ src: '/assets/images/vellmo1.webp', alt: 'Vell moの画像1', width: 1000, height: 555 },
			{ src: '/assets/images/vellmo2.webp', alt: 'Vell moの画像2', width: 1000, height: 555 },
			{ src: '/assets/images/vellmo3.webp', alt: 'Vell moの画像3', width: 1000, height: 555 },
			{ src: '/assets/images/vellmo4.webp', alt: 'Vell moの画像4', width: 1000, height: 555 }
		]
	},
	{
		title: "Kokomi's travel diary",
		description:
			'架空の少女であるKokomiの旅のブログサイトです。緑色をテーマにした、こちらも可愛らしいデザインです。キャラクターの立ち絵から考えて作り、タグによる検索機能もあります。',
		url: 'https://kokomi-travel-diary.vercel.app',
		skills: ['SvelteKit', 'Tailwind', 'Open props'],
		images: [
			{ src: '/assets/images/kokomi1.webp', alt: 'Kokomi travel diaryの画像1', width: 1000, height: 555 },
			{ src: '/assets/images/kokomi2.webp', alt: 'Kokomi travel diaryの画像2', width: 1000, height: 555 },
			{ src: '/assets/images/kokomi3.webp', alt: 'Kokomi travel diaryの画像3', width: 1000, height: 555 },
			{ src: '/assets/images/kokomi4.webp', alt: 'Kokomi travel diaryの画像4', width: 1000, height: 555 },
		]
	}
];
