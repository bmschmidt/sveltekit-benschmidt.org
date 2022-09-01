<script>
  import foo from '$lib/../content/post/2020-10-01-jobs-update/2020-10-01-jobs-update.md'
  import { Document } from 'pandoc-svelte-components'
</script>

<Document ast={foo.document} />