type Theme = 'light' | 'dark';

export const toggleTheme = () => {
	const theme = localStorage.getItem('color-scheme') as Theme;
	if (theme === "light") {
		document.documentElement.classList.remove('light');
		localStorage.setItem('color-scheme', 'dark');
	} else if (theme === "dark") {
		document.documentElement.classList.add('light');
		localStorage.setItem('color-scheme', 'light');
	}
}