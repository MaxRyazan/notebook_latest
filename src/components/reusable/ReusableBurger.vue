<script setup lang="ts">
import {BurgerButtons, ButtonTypes} from "@/types.ts";
import {ref} from "vue";

const props = defineProps<{
    burgerButtons: BurgerButtons[]
}>()
const inner = ref()

function show() {
    inner.value.classList.toggle('hide')
}

async function pushButton(command: () => any) {
    await command()
    inner.value.classList.toggle('hide')
}

</script>

<template>
    <div style="position:relative;">
        <div class="burger_wrapper" @click="show"></div>
        <div ref="inner" class="hide inner_wrapper">
            <button v-for="button in props.burgerButtons" :key="button.buttonText"
                    :style="button.buttonStyles"
                    @click="pushButton(button.buttonEvent)"
                    :class="{
                        default: button.buttonType===ButtonTypes.DEFAULT,
                        round_violet: button.buttonType===ButtonTypes.ROUND_VIOLET,
                        round_warning: button.buttonType===ButtonTypes.ROUND_WARNING,
                    }"
            >
                {{ button.buttonText }}
            </button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.burger_wrapper {
  cursor: pointer;
  margin-left: 20px;
  position: relative;
  height: 16px;
  width: 30px;
  display: none;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
  &::after {
    content: '';
    position: absolute;
    top: calc(50% - 1px);
    width: 30px;
    border-bottom: 2px solid black;
  }
  @media (max-width: 799.79px) {
    display: block;
  }
}

.hide {
  display: none;
}

.inner_wrapper {
  position: absolute;
  top: 30px;
  & button {
    position: relative;
    white-space: nowrap;
    text-align: center;
    width: 100%;
    z-index: 99;
    margin-top: 5px;
  }
}
</style>