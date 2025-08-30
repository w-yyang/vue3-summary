<template>
  <input type="file" @change="fileSelectChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { uploadSingleFile } from '../apis/index';

export default defineComponent({
  setup() {
    const fileSelectChange = (event) => {
      const file = event.target.files[0];
      console.log('eeee', file);
      const formInstance = new FormData();
      formInstance.append('file', file);
      uploadSingleFile(formInstance);
    };

    return {
      fileSelectChange
    }
  }
})
</script>