<script lang="ts">
	import { skills } from "$lib/data/skills";
	import Container from "$lib/components/utils/container.svelte";
	import ContentsField from "$lib/components/utils/contentsField.svelte";
	import Sentence from "$lib/components/utils/sentence.svelte";
	import Hero from "$lib/components/hero.svelte";
	import List from "$lib/components/utils/list/list.svelte";
	import Gallery from "$lib/components/gallery.svelte";
</script>

<Hero />
<Container id="greeting">
	<ContentsField>
		<h3>Greeting</h3>
		<Sentence>
			<p>こんにちは、私はRyoと申します。</p>
			<p>私はフロントエンドに関して学ぶことが大好きで、Webサイトを作っています。</p>
			<p>既存のWebサイトの常識に囚われない、新しくて楽しいWebサイトの形を常に探っています。</p>
			<p>インターネットには膨大なコンテンツで溢れていて、自分がたくさん時間をかけて一生懸命作った作品もすぐに埋もれてしまいます...</p>
			<p>そこで私は、それをWebサイトという形にすることで、一人でも多くの人に見てもらえることを心から願っていますし叶えたいと考えています。</p>
			<p>私も誰かの期待や拘りに応えられるように、常に新しい技術を学び美しいWebサイトを作れるようにしています。</p>
		</Sentence>
	</ContentsField>
</Container>
<Container id="greeting">
	<ContentsField>
		<h3>Skill</h3>
		<List listData={skills} />
	</ContentsField>
</Container>
<Container id="greeting">
	<ContentsField>
		<h3>Gallery</h3>
		<Gallery />
	</ContentsField>
</Container>

