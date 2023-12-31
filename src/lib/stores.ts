import { writable, readable } from 'svelte/store';

type AudioGroupState = {
	title: string,
	author: string,
	thumbImage: string,
	isPlaying: boolean;
	loop: boolean;
	currentTime: number;
	currentSrc: string;
};

export const strokeWidth = readable('1px');

export const audioGroupState = writable<AudioGroupState>({
	title: '',
	author: '',
	thumbImage: '',
	isPlaying: false,
	loop: true,
	currentTime: 0,
	currentSrc: ''
});

export const isAudioControllerMounted = writable(false);
export const audioControllerHeight = writable<number | null>(null);
