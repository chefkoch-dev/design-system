<template>
  <button
    v-bind="$attrs"
    class="ds-btn"
    :class="buttonClass"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "CkButton",
  props: {
    primary: Boolean,
    secondary: Boolean,
    tertiary: Boolean,
    delete: Boolean,
    link: Boolean,
    disabled: Boolean,
    class: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const buttonClass = computed(
      (): string =>
        ((props.primary && "ds-btn-primary") ||
          (props.secondary && "ds-btn-secondary") ||
          (props.tertiary && "ds-btn-tertiary") ||
          (props.delete && "ds-btn-delete") ||
          (props.link && "link") ||
          "") + (props.class ? ` ${props.class}` : "")
    );
    return {
      buttonClass,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "../components/colors";
@import "../components/button";
@import "../components/button-primary";
@import "../components/button-secondary";
@import "../components/button-tertiary";
@import "../components/button-inactive";

.link {
  border: 0;
  /* font-family: system-ui, sans-serif; */
  background: $color-white;
  /* font-size: 1rem; */
  /* line-height: 1.2; */
  white-space: nowrap;
  text-decoration: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  cursor: pointer;
}
</style>
