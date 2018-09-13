<template>
<component :is="tag" class="o-flexContainer"
           :class="[{ '-fill': fill }, schema || '']">
  <div class="o-flexContainer__wrapper"
    :class="schema ? schema + '__wrapper' : ''">
    <div ref="column" v-for="level in levels" :key="level"
      class="o-flexContainer__column"
      :class="[schema ? schema + '__column' : '', 
      schema ? schema + '__' + Object.keys($slots)[level - 1]
      : Object.keys($slots)[level -1]]">
      <slot :name="Object.keys($slots)[level - 1]"></slot>
    </div>
  </div>
</component>
</template>

<script>
export default {
  name: 'VS-FlexContainer',
  created () {
    this.levels = Object.keys(this.$slots).length
  },
  props: {
    schema: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'div'
    },
    fill: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      levels: 0
    }
  }
}
</script>

<style>

.o-flexContainer.-fill {
  display: flex;
  flex-flow: column;
  flex: 1;
}
.o-flexContainer.-fill .o-flexContainer__wrapper {
  display: flex;
  flex-flow: column;
  flex: 1;
}
.o-flexContainer.-fill .o-flexContainer__column {
  display: flex;
  flex-flow: column;
  flex: 1;
}

.o-flexContainer__wrapper,
.o-flexContainer {
    display: flex;
    flex-flow: column;
}

</style>
