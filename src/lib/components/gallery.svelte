<script>
	import { creations } from '$lib/data/creations';
	import Card from '$lib/components/utils/card/card.svelte';
	import CardBody from '$lib/components/utils/card/cardBody.svelte';
	import CardFoot from '$lib/components/utils/card/cardFoot.svelte';
	import LinkBtn from '$lib/components/utils/linkBtn.svelte';
	import CardLeft from '$lib/components/utils/card/cardLeft.svelte';
	import CardRight from '$lib/components/utils/card/cardRight.svelte';
	import Carousel from '$lib/components/utils/carousel.svelte';
</script>

<div class="gallery">
	{#each creations as creation}
		<Card>
			<CardLeft>
				<Carousel images={creation.images} />
			</CardLeft>
			<CardRight>
				<CardBody>
					<div class="itemName">Title：</div>
					<h4>{creation.title}</h4>
				</CardBody>
				<CardBody>
					<div class="itemName">Description：</div>
					<p>{creation.description}</p>
				</CardBody>
				<CardBody>
					<div class="itemname">Skills：</div>
					<ul class="skills">
						{#each creation.skills as skill}
							<li>{skill}</li>
						{/each}
					</ul>
				</CardBody>
				<CardFoot>
					<LinkBtn href={creation.url} blank={true}>Go to Site!</LinkBtn>
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
</style>
