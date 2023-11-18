<script lang="ts">
	import { skills } from '$lib/data/skills';
	import Container from '$lib/components/utils/container.svelte';
	import ContentsField from '$lib/components/utils/contentsField.svelte';
	import Sentence from '$lib/components/utils/sentence.svelte';
	import Hero from '$lib/components/hero.svelte';
	import List from '$lib/components/utils/list/list.svelte';
	import Gallery from '$lib/components/gallery.svelte';
	import Divider from '$lib/components/utils/divider.svelte';
	import Label from '$lib/components/utils/form/label.svelte';
	import Input from '$lib/components/utils/form/input.svelte';
	import Textarea from '$lib/components/utils/form/textarea.svelte';
	import SubmitBtn from '$lib/components/utils/form/submitBtn.svelte';
	import { superForm } from 'sveltekit-superforms/client';
	import { contactSchema } from '$lib/validateSchema';
	import Position from '$lib/components/utils/Position.svelte';

	export let data;

	const { form, errors, enhance } = superForm(data.form, {
		validators: contactSchema
	});
</script>



<Hero />
<Container id="greeting">
	<ContentsField>
		<h3>Greeting</h3>
		<Sentence>
			<p>こんにちは、私はRyoと申します。</p>
			<p>私はフロントエンドに関して学ぶことが大好きで、ウェブサイトを作っています。</p>
			<p>常に既存の常識に囚われない、新しくて楽しいサイトの形を探っています。</p>
			<Divider space="md" />
			<p>
				このサイトもそうですが、私は音楽を聞きながらウェブサイトを楽しむという少し変わったコンセプトを持っています。
			</p>
			<p>
				ウェブサイトは情報を載せるだけがすべてではありません。<br
				/>文章、画像、音楽が調和することで新しい感動を与えられると私は確信しています。
			</p>
			<Divider space="md" />
			<p>私は今のウェブの広告に対して疑問を持っています。</p>
			<p>
				あなたがたくさんの時間をかけて作り出した愛のこもった作品があって、それをインターネット上に投稿しても、それは瞬く間に膨大な情報の中に埋もれてします...
			</p>
			<p>
				自分ができることは、その投稿したプラットフォームを信じることだけで、彼らがきっと自分の作品を求めている人たちに届けてくれるであろうという想像だけです。
			</p>
			<Divider space="md" />
			<p>そこで私は、クリエイター自らがウェブでその活動を披露し、少しでも多くの人の目にとまってもらえるような環境が必要であると考えています。</p>
			<p>
				これはまだ私の夢の段階でしかありませんが、ウェブサイトを作っていく中でその方法を模索し続け、いずれそれを実現させたいです。
			</p>
			<Divider space="md" />
			<p>
				誰もが自分の作品や想いを、それを見てほしい人たちにきちんと届くようなウェブを作ることが私の人生の目標です。
			</p>
		</Sentence>
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
		<Gallery />
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