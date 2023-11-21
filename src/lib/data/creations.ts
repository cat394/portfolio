export type SiteInfos = {
  skills: string[];
  url: string;
  title: string;
  description: string;
  imageName: string;
  numberOfImage: number;
}[];

const websites =[
  {
    title: '待ち人',
    description: '文章と画像と音で楽しむ新しい形のWebサイト。シナリオは私のオリジナルであり、それに合わせた落ち着いた雰囲気でありながらもアクセントにピンクや紫を使うことで甘酸っぱさみたいなのも表現しました。',
    url: 'https://machibito.vercel.app',
    skills: 'Astro,Svelte,DaisyUI',
    imageName: 'machibito',
  },
  {
    title: 'Vell mo',
    description: '行きつけの美容室のWebサイトを作りました。シンプルながらもカラフルで可愛らしいデザインになっています。ナビゲーションは直感的であり、ダークテーマもあるので目に優しいのも特徴です。',
    url: 'https://vellmo.netlify.app',
    skills: 'React',
    imageName: 'vellmo'
  },
  {
    title: "Kokomi's trave. diary",
    description: '架空の少女であるKokomiの旅のブログサイトです。緑色をテーマにした、こちらも可愛らしいデザインです。キャラクターの立ち絵から考えて作り、タグによる検索機能もあります。',
    url: 'https://kokomi-travel-diary.vercel.app',
    skills: 'SvelteKit,Tailwind,Open props',
    imageName: 'kokomi'
  },
  {
    title: 'Guide Doc',
    description: '私に仕事を依頼してもらえる方に向けて書いたWebサイトの制作過程を記したドキュメントです。画像付きで分かりやすく説明していると思います。',
    url: 'https://ryo-create-site.netlify.app',
    skills: 'Astro,starlight',
    imageName: 'guide'
  },
]

export const creations = websites.map(website => ({
  ...website,
  skills: website.skills.split(","),
  numberOfImage: 4
}));