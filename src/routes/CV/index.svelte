<script>
  import CV from '../../curriculum_vitae.yaml?raw'
  import yaml from 'js-yaml'
  import CVSection from './_CVsection.svelte'
  const cv = yaml.safeLoad(CV)
  const values = Object.entries(cv).filter(d => d[1].map)

</script>
<div class="absolute top-0 right-0">
<div class="grid gap-4 content-center grid-cols-8">
  {#each values as [name, values]}
      <CVSection {name} {values} />
    {/each}
</div>
</div>
