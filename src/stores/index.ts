import { computed, reactive, ref } from "vue";
import { defineStore } from "pinia";

export const useTestStore1 = defineStore('testStore1', () => {
  const testRef = ref(1);
  const testReactive = reactive({
    id: 1,
    test: '1'
  });

  const testRefDouble = computed(() => {
    console.log('testReftestRef', testRef.value);
    return testRef.value * 2;
  });

  const handleAddRef = () => {
    testRef.value++;
  };

  const handleAddReactive = () => {
    testReactive.id++;
    testReactive.test = testReactive.test.repeat(2);
  };

  return {
    testRef,
    testReactive,
    testRefDouble,
    handleAddRef,
    handleAddReactive
  };
});

export const useTestStore2 = defineStore('testStore2', {
  state: () => {
    return {
      testRef: 0,
      testReactive: {
        id: 1,
        test: '1'
      }
    };
  },
  getters: {
    testRefDouble: (state) => {
      return state.testRef * 2;
    }
  },
  actions: {
    handleRef() {
      console.log('asdfgnm,', this.testRef);
      this.testRef = this.testRef + 1;
    },
    handleReactive() {
      this.testReactive = {
        id: this.testReactive.id + 1,
        test: this.testReactive.test.repeat(2)
      };
    }
  }
});