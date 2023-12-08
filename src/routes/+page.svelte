<script lang="ts">
	import { skills } from '$lib/data/skills';
	import Container from '$lib/components/utils/container.svelte';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
	import Hero from '$lib/components/hero.svelte';
	import List from '$lib/components/utils/list/list.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Label from '$lib/components/utils/form/label.svelte';
	import Input from '$lib/components/utils/form/input.svelte';
	import Textarea from '$lib/components/utils/form/textarea.svelte';
	import SubmitBtn from '$lib/components/utils/form/submitBtn.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { contactSchema } from '$lib/validateSchema';
	import Position from '$lib/components/utils/Position.svelte';
	import { creations } from '$lib/data/creations';

	export let data;

	const { form, errors, enhance } = superForm(data.form, {
		validators: contactSchema
	});
</script>

<Hero />
<Container id="greeting">
	<ContentsField>
		<h3>Greeting</h3>
		<div class="prose">
			<svelte:component this={data.intro}></svelte:component>
		</div>
	</ContentsField>
</Container>
<Container id="skills">
	<ContentsField>
		<h3>Skill</h3>
		<List listData={skills} />
	</ContentsField>
</Container>
<Container id="gallery">
	<ContentsField>
		<h3>Gallery</h3>
		<Gallery siteInfos={creations} />
	</ContentsField>
</Container>
<Container id="contact">
	<ContentsField>
		<h3>Contact</h3>
		<form method="POST" use:enhance>
			<Label formName="Your name">
				<Input 
					type="text"
					placeholder="名前を入力してください"
					name="name"
					bind:value={$form.name}
				/>
				<div slot="errorMessage">
					{#if $errors.name}
						{$errors.name}
					{/if}
				</div>
			</Label>
			<Label formName="Your email">
				<Input
					type="email"
					placeholder="メールアドレスを入力してください"
					name="email"
					bind:value={$form.email}
				/>
				<div slot="errorMessage">
					{#if $errors.email}
						{$errors.email}
					{/if}
				</div>
			</Label>
			<Label formName="Your message">
				<Textarea
					placeholder="お問い合わせ内容を入力してください"
					name="message"
					cols="30" rows="8"
					bind:value={$form.message}
				/>
				<div slot="errorMessage">
					{#if $errors.message}
						{$errors.message}
					{/if}
				</div>
			</Label>
			<Position position="center">
				<SubmitBtn />
			</Position>
		</form>
	</ContentsField>
</Container>

<style>
	form {
		display: grid;
		gap: var(--size-8);
		justify-content: center;
	}
</style>