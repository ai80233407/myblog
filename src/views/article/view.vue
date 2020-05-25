<template>
  <Viewer
    height="500px"
    :initialValue="value"
  />
</template>

<script>
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import { Viewer } from '@toast-ui/vue-editor'
export default {
  name: 'View',
  components: {
    Viewer
  },
  props: {
    id: {
      type: Number,
      isRequired: true,
      default: 0
    }
  },
  data: function() {
    return {
      title: '',
      value: '# This is Viewer. Hello World.'
    }
  }
}
</script>

<style scoped>

</style>
