export type SkillItem = {
	name: string;
	children?: SkillItem[];
};

export const skills: SkillItem[] = [
	{
		name: 'Basic',
		children: [{ name: 'HTML' }, { name: 'CSS' }, { name: 'JavaScript' }, { name: 'Typescript' }]
	},
	{
		name: 'Framework',
		children: [
			{
				name: 'Web',
				children: [{ name: 'Astro' }, { name: 'SvelteKit' }]
			},
			{
				name: 'CSS',
				children: [{ name: 'Tailwind' }, { name: 'Open props' }]
			},
			{
				name: 'JavaScript',
				children: [{ name: 'React' }, { name: 'Svelte' }]
			}
		]
	}
];
