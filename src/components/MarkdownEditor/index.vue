<template>
  <Editor
    :id="id"
    :ref="'editor'"
    :height="height"
    :options="editorOptions"
    :initialValue="value"
    :previewStyle="view"
    :initialEditType="mode"
  />
</template>

<script>
import 'codemirror/lib/codemirror.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import '@toast-ui/editor/dist/i18n/zh-cn'
import { Editor } from '@toast-ui/vue-editor'
import defaultOptions from './default-options'

export default {
  name: 'MarddownEditor',
  components: {
    Editor
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default() {
        return 'markdown-editor-' + +new Date() + ((Math.random() * 1000).toFixed(0) + '')
      }
    },
    options: {
      type: Object,
      default() {
        return defaultOptions
      }
    },
    mode: {
      type: String,
      default: 'markdown' // wysiwyg|markdown
    },
    view: {
      type: String,
      default: 'vertical' // vertical|tab
    },
    height: {
      type: String,
      required: false,
      default: '500px'
    },
    language: {
      type: String,
      required: false,
      default: 'zh-CN' // https://github.com/nhnent/tui.editor/tree/master/src/js/langs
    }
  },
  data() {
    return {

    }
  },
  computed: {
    editorOptions() {
      const options = Object.assign({}, defaultOptions, this.options)
      options.language = this.language
      return options
    }
  },
  mounted() {
  },
  methods: {
    getHtml: function() {
      return this.$refs.editor.invoke('getHtml')
    }
  }
}
</script>
