<script>
  import Index from "./index.md";
  import iklan from "./iklan.yaml";
</script>

<Index></Index>

<h2>Store</h2>
{#each iklan as item}
  <p>
    <a href={item.link} target="_blank">
      <img src={item.gambar} alt="" />
    </a>
  </p>
{/each}
