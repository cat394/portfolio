<script>
	export let form;
</script>

<div class="container">
	<div class="wrapper">
		<form method="POST">
			<label>
				<div class="title">パスフレーズを入力してね♪</div>
				<input name="passphrase" autocomplete="off" />
			</label>
		</form>
		{#if form?.incorrect}
			<p class="error">パスフレーズが違うみたいだよ。</p>
		{/if}
	</div>
</div>


<style>
	.container {
		min-height: 100dvh;
		height: 100%;
		display: grid;
		place-items: center;
		background-color: rgb(48, 46, 46);
		color: white;
		font-size: 1.2rem;
	}
	.title {
		margin-bottom: .5em;
	}
	.wrapper {
		position: relative;
		padding-inline: 10px;
	}
	label {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	input {
		width: 100%;
		font: inherit;
		padding: 0.5em;
		border-radius: 10px;
	}
	.error {
		padding:0;
		margin: 0;
		position: absolute;
		bottom: -3em;
		left: 0;
		color: red;
	}
</style>
