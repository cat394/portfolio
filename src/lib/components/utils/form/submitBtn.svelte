<script lang="ts">
  import { SendHorizonal } from "lucide-svelte";
  import { strokeWidth } from "$lib/stores";
</script>


<button class="ax-btn submit-btn" type="submit">
  <div class="wrapper">
    <div class="text"><span>送信する</span></div>
    <div class="icon">
      <SendHorizonal strokeWidth={$strokeWidth} />
    </div>
  </div>
</button>


<style>
  .submit-btn {
    width: 100%;
    max-width: 300px;
    transition: all 500ms;
    border: 1px solid transparent;
    outline: 2px solid var(--brand-light);
    outline-offset: 3px;
    border-radius: var(--radius-2);
    font-size: var(--font-size-sm);
    position: relative;
  }

  .submit-btn:hover {
    border-color: var(--text-1);
  }

  .wrapper {
    padding: var(--size-3);
    display: flex;
    justify-content: center;
  }

  .text {
    font-size: var(--font-size-sm);
    display: flex;
    align-items: center;
  }

  .icon {
    height: 100%;
    position: absolute;
    right: 20px;
    top: 0;
    display: flex;
    align-items: center;
    padding-right: var(--size-2);
		animation: bounce 2s infinite cubic-bezier(0.445, 0.05, 0.55, 0.95);
    color: var(--text-1);
	}

  @keyframes bounce {
    0% {
        translate: 0 0;
    }
    
    50% {
        translate: 7px;
    }
	}
</style>