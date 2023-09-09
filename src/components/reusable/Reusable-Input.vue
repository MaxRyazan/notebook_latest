<script setup lang=ts>
import {ref} from "vue";
import {ErrorObject} from "@vuelidate/core";

defineOptions({
    inheritAttrs: false
})
const props = defineProps<{
    modelValue: string,
    label?: string,
    width?: string,
    typePassword?: boolean,
    no_border?: boolean
    errors?: ErrorObject[]
}>()
defineEmits(['update:modelValue'])
const input = ref()
</script>

<template>
    <div :style="{width: props.width}" class="reus_input_wrapper">
        <label class="form_label">{{ props.label }}</label>
        <input :class="{no_border}"
               :style="{width: props.width}"
               :type="props.typePassword? 'password':'text'"
               @input="$emit('update:modelValue', input.value)"
               :value="modelValue"
               ref="input"
               v-bind="$attrs">
        <div class="error_wrapper" v-if="props.errors?.length">
            <span v-for="error in props.errors" :key="error.$uid">{{ error.$message }}</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.reus_input_wrapper {
  position: relative;
}

.error_wrapper {
  position: absolute;
  bottom: -18px;
  color: $primaryError;
  font-size: 12px;
}

.form_label {
  position: absolute;
  left: 0;
  bottom: 25px;
  font-size: 12px;
}

.no_border {
  outline: none;
  border: none;
  border-bottom: 2px solid $primaryViolet;
  text-align: center;
}
</style>