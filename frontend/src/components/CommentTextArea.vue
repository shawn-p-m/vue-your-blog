<template v-if="comment">
  <tiptap-vuetify
    class="d-flex mx-auto"
    style="width: 85%; min-width:85%; max-width:95%; flex: 1 1 auto; "
    :card-props="{ width: '98%' }"
    v-model="comment.content"
    @blur="nullTextOnLowCharCount"
    :extensions="extensions"
    placeholder="Write your comment here"
    required
    @input="$emit('update:currentUserComment', $event)"
  />
</template>

<script>
import {
  TiptapVuetify,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  Link,
  Blockquote,
  HardBreak,
  History,
} from 'tiptap-vuetify'
export default {
  props: {
    comment: {
      type: Object,
    },
  },
  created() {
    // alert(this.comment)
  },
  data() {
    return {
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        Bold,
        Paragraph,
        HardBreak,
      ],
    }
  },
  components: {
    TiptapVuetify,
  },
  methods: {
    nullTextOnLowCharCount() {
      this.comment &&
      this.comment.content.length < 10 &&
      this.comment.content.includes('<')
        ? (this.comment.content = null)
        : true
    },
  },
}
</script>

<style></style>
