<script>
	export let form;
</script>

<form method="POST">
	<label>
		<div class="title">パスフレーズを入力してね♪</div>
		<input name="passphrase" autocomplete="off" />
	</label>
</form>

{#if form?.incorrect}
	<p class="error">パスフレーズが違うみたいだよ。</p>
{/if}

<style>
	.title {
		margin-bottom: .5em;
	}
	label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	form {
		min-height: 100dvh;
		height: 100%;
		display: grid;
		place-items: center;
		background-color: black;
		color: white;
		font-size: 20px;

	}
	input {
		width: 100%;
		line-height: 2;
		font: inherit;
		padding: 0.5em;
		border-radius: 10px;
	}
	.error {
		color: red;
	}
</style>
