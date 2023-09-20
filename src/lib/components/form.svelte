<script>
	import Input from './utils/form/input.svelte';
	import Textarea from './utils/form/textarea.svelte';
	import SubmitBtn from './utils/form/submitBtn.svelte';
</script>

<form action="https://ssgform.com/s/fmGjPCLMYoFD">
	<Input type="text" formName="Your name" placeholder="名前を入力してください" name="name" />
	<Input
		type="email"
		formName="Your email"
		placeholder="メールアドレスを入力してください"
		name="email"
	/>
	<Textarea
		formName="Your message"
		placeholder="お問い合わせ内容を入力してください"
		name="message"
		rows="8"
	/>
	<div class="center">
		<SubmitBtn />
	</div>
</form>

<style>
	form {
		display: grid;
		gap: var(--size-8);
		justify-content: center;

	}

	.center {
		display: flex;
		justify-content: center;
	}
</style>
