<script setup lang="ts">
import {ErrorObject} from "@vuelidate/core";
import {ref} from "vue";

const text = ref()
const props = defineProps<{
    modelValue: string,
    height?: string,
    errors?: ErrorObject[]
}>()
</script>

<template>
    <div :style="{height: props.height}" class="textarea_wrapper">
        <textarea :value="modelValue" ref="text" class="textarea"  @input="$emit('update:modelValue', text.value)"/>
        <div class="error_wrapper" v-if="props.errors?.length">
            <span v-for="error in props.errors" :key="error.$uid">{{ error.$message }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.textarea_wrapper{
  position: relative;
}
.textarea{
  width: 99%;
  height: 97%;
  resize: vertical;
  border: 2px solid $primaryViolet;
  outline: none;
}
.error_wrapper {
  position: absolute;
  bottom: -18px;
  color: $primaryError;
  font-size: 12px;
}
</style>