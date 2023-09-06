<script lang="ts">
	import { skills } from "$lib/data/skills";
	import Container from "$lib/components/utils/container.svelte";
	import ContentsField from "$lib/components/utils/contentsField.svelte";
	import Sentence from "$lib/components/utils/sentence.svelte";
	import Hero from "$lib/components/hero.svelte";
	import List from "$lib/components/utils/list/list.svelte";
	import Gallery from "$lib/components/gallery.svelte";
	import Divider from "$lib/components/utils/divider.svelte";
	import Form from "$lib/components/form.svelte";
	import { Space } from "lucide-svelte";
</script>

<Hero />
<Container id="greeting">
	<ContentsField>
		<h3>Greeting</h3>
		<Sentence>
			<p>こんにちは、私はRyoと申します。</p>
			<p>私はフロントエンドに関して学ぶことが大好きで、Webサイトを作っています。</p>
			<p>常に既存の常識に囚われない、新しくて楽しいWebサイトの形を探っています。</p>
			<Divider space="md" />
			<p>このサイトもそうですが、私は音楽を聞きながらWebサイトを楽しむという変わったコンセプトを持っています。</p>
			<p>Webサイトは情報を載せるだけがすべてではありません。<br>文章、画像、音楽が調和することで新しい感動を与えられると私は確信しています。</p>
			<Divider space="md" />
			<p>現代、ウェブは巨大になっているにも関わらず、その広告市場は問題ばかりです。</p>
			<p>あなたがたくさんの時間をかけて作り出した愛のこもった作品があって、それをインターネット上に投稿しても、それは瞬く間に埋もれてします。</p>
			<p>実質上、企業規模の団体でなければロクに宣伝する機会さえ与えられなく、個人やサークルなどの小さな単位は無力に等しいです。</p>
			<Divider space="md" />
			<p>そこで私は、こうした過度なプラットフォームへの一極集中化を抑制し、分散されて開放的なWebの広告環境を作るのが重要だと考えています。</p>
			<p>誰もが自分の作品や想いを、それを見てほしい人たちにきちんと届くようなWebを作ることが私の人生の目標です。</p>
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
		<Form />
	</ContentsField>
</Container>