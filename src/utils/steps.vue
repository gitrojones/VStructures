<template>
<component class="o-stepManager" :is="tag" v-bind="bind">
  <slot v-bind:steps="{ step: currentStep, incrementStep, decrementStep, gotoStep }"></slot>
</component>
</template>

<script>
export default {
  name: 'VS-Steps',
  props: {
    activeStep: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    bind: {
      type: Object,
      default () { return {} }
    }
  },
  watch: {
    activeStep(v) {
      this.currentStep = v
      
      if (this.canUpdate) {
        this.$nextTick(() => {
          this.canUpdate = false
        })
      }
    },
    currentStep (v) {
      if (!this.canUpdate) {
        this.canUpdate = true
        this.$emit('stepChange', v)
      }
    }
  },
  data () {
    return {
      steps: this.$slots.default || null,
      canUpdate: false,
      currentStep: this.activeStep || 0
    }
  },
  methods: {
    incrementStep () {
      this.currentStep += 1
    },
    decrementStep () {
      this.currentStep -= 1
    },
    gotoStep (e, step) {
      if (typeof step === 'Number') {
        this.currentStep = Math.round(step)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>

<docs>
  Step Utility component that can be aliased with internal VS components such as the flex container

  Props:
    + activeStep - Manage the step state externally
    + tag - the component tag, can mount via component name if it is a registered component and allows for slot based children like the flex container
    + bind - bind options to the instance if aliasing a component such as flex container

  Usage:
    Steps are apart of the default slot which exposes the steps slot-scope. Slots exposes the currentStep and helper methods for incrementing, decrementing, and setting the internal step
</docs>
