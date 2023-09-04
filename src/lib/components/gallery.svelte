<script>
 import { creations } from "$lib/data/creations";
  import Card from "./utils/card/card.svelte";
  import CardBody from "./utils/card/cardBody.svelte";
  import CardFoot from "./utils/card/cardFoot.svelte";
  import Carousel from "./utils/carousel.svelte";
  import LinkBtn from "./utils/linkBtn.svelte";
	import CardLeft from "./utils/card/cardLeft.svelte";
  import CardRight from "./utils/card/cardRight.svelte";
</script>

<div class="gallery">
  {#each creations as creation}
    <Card>
      <CardLeft>
        <simple-carousel>
          {#each creation.images as image}
            <img src={image.src} width={image.width} height={image.height} alt={image.alt} />
          {/each}
        </simple-carousel>
      </CardLeft>
      <CardRight>
        <CardBody>
          <div>Title：</div>
          <h4>{creation.title}</h4>
        </CardBody>
        <CardBody>
          <div>Description：</div>
          <p>{creation.description}</p>
        </CardBody>
        <CardBody>
          <span>Skills：</span>
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
    gap: var(--size-5);
  }

  .skills {
    display: flex;
    gap: var(--size-5);
  }
</style>


