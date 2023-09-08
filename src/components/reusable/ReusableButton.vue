<script setup lang="ts">

const props = defineProps<{
    round_violet?: boolean,
    round_warning?: boolean,
    close_warning?: boolean,
    width?: string
}>()
defineEmits(['push'])

</script>

<template>
    <div>
        <button class="reus_button"
                :class="{round_violet, round_warning, close_warning}"
                :style="{width: props.width}"
                @click="$emit('push')"
        >
            <slot />
        </button>
    </div>
</template>

<style scoped lang="scss">

</style>