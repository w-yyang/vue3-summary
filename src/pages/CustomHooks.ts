import { reactive, watchEffect } from 'vue';

export const useInputWatch = () => {
  const inpInstance = reactive({
    valueStr: ''
  });

  watchEffect(() => {
    console.log(inpInstance.valueStr);
  });

  return {
    inpInstance
  };
};