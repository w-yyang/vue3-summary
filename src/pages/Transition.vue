<template>
  <div>
    <button @click="showElem = !showElem">change</button>
    <Transition name="change">
      <div v-if="showElem">
        <p style="background-color: red;">
          12345678
        </p>
      </div>
    </Transition>
  </div>
</template>

<script>
import { defineComponent, Transition, ref } from 'vue';
export default defineComponent({
  components: {
    Transition
  },
  setup() {
    const showElem = ref(false);

    return {
      showElem
    };
  } 
})
</script>

<style scoped>
.change-enter-from {
  opacity: 0;
}

.change-enter-to {
  opacity: 1;
}

.change-enter-active {
  transition: opacity 1s linear;
}

.change-leave-from {
  opacity: 1;
}

.change-leave-to {
  opacity: 0;
}

.change-leave-active {
  transition: opacity 1s linear;
}
</style>