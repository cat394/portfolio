<script lang="ts">
	import '@splidejs/svelte-splide/css/core';
	import Card from '$lib/components/utils/card/card.svelte';
	import CardBody from '$lib/components/utils/card/cardBody.svelte';
	import CardFoot from '$lib/components/utils/card/cardFoot.svelte';
	import LinkBtn from '$lib/components/utils/linkBtn.svelte';
	import CardLeft from '$lib/components/utils/card/cardLeft.svelte';
	import CardRight from '$lib/components/utils/card/cardRight.svelte';
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import { ChevronLeft, ChevronRight } from 'lucide-svelte';

	type SiteInfos = {
		skills: string[];
		id: number;
		url: string;
		title: string;
		description: string;
		imageName: string;
		numberOfImage: number;
	}[];

	export let siteInfos: SiteInfos;
</script>

<div class="gallery">
	{#each siteInfos as site}
		<Card>
			<CardLeft>
				<Splide
					aria-label="Ryoが作成したWebサイトの画像"
					options={{
						type: 'loop',
						autoplay: true,
						speed: 1100,
						interval: 3000,
						focus: 'center'
					}}
					hasTrack={false}
				>
					<SplideTrack>
						{#each { length: site.numberOfImage } as _, i (i)}
							{@const imageSource = site.imageName + (i + 1)}
							<SplideSlide>
								<img
									src="../../assets/images/{imageSource}.webp"
									alt="{site.title}のサムネイル{i + 1}"
								/>
							</SplideSlide>
						{/each}
					</SplideTrack>
					<div class="splide__arrows">
						<button class="splide__arrow splide__arrow--prev"
							><div class="btn-wrapper"><ChevronLeft size="2rem" /></div></button
						>
						<button class="splide__arrow splide__arrow--next"
							><div class="btn-wrapper"><ChevronRight size="2rem" /></div></button
						>
					</div>
				</Splide>
			</CardLeft>
			<CardRight>
				<CardBody>
					<div class="itemName">Title：</div>
					<h4>{site.title}</h4>
				</CardBody>
				<CardBody>
					<div class="itemName">Description：</div>
					<p>{site.description}</p>
				</CardBody>
				<CardBody>
					<div class="itemname">Skills：</div>
					<ul class="skills">
						{#each site.skills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</CardBody>
				<CardFoot>
					<LinkBtn href={site.url} blank={true}>Go to Site!</LinkBtn>
				</CardFoot>
			</CardRight>
		</Card>
	{/each}
</div>

<style>
	.gallery {
		display: grid;
		gap: var(--size-fluid-5);
	}

	.itemName {
		margin-bottom: var(--size-2);
	}
	.skills {
		display: flex;
		gap: var(--size-5);
	}

	.splide__arrow {
		position: absolute;
		top: 50%;
		translate: 0 -50%;
	}

	.splide__arrow--prev {
		left: 0;
	}

	.splide__arrow--next {
		right: 0;
	}
	.btn-wrapper {
		color: var(--accent-dark);
		display: inline-grid;
		place-items: center;
		border: 1px solid var(--accent-dark);
		border-radius: var(--radius-round);
		transition: color 500ms, background-color 500ms;
	}

	.btn-wrapper:hover {
		color: white;
		background-color: var(--accent-dark);
	}
</style>
