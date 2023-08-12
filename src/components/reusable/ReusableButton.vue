<script setup lang="ts">

const props = defineProps<{
    round_violet?: boolean,
    round_warning?: boolean,
    width?: string
}>()
defineEmits(['push'])

</script>

<template>
    <div>
        <button class="reus_button"
                :class="{round_violet, round_warning}"
                :style="{width: props.width}"
                @click="$emit('push')"
        >
            <slot />
        </button>
    </div>
</template>

<style scoped lang="scss">
.round_violet{
  border-radius: 20px;
  border: 2px solid $primaryViolet;
  padding: 3px 7px;
  background-color: $white;
  color: $secondaryViolet;
  &:hover{
    border: 2px solid $secondaryViolet;
  }
}
.round_warning{
  border-radius: 20px;
  border: 2px solid $primaryWarning;
  padding: 3px 7px;
  background-color: $white;
  color: $primaryWarning;
  &:hover{
    border: 2px solid $secondaryWarning;
    color: $secondaryWarning;
  }
}
</style>