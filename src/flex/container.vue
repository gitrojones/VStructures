<template>
<component :is="tag" :class="schema || ''">
  <div class="o-flexContainer__wrapper" :class="schema ? schema + '__wrapper' : ''">
    <div ref="column" v-for="level in levels" :key="level"
    class="o-flexContainer__column"
    :class="[schema ? schema + '__column' : '', '-level-' + level]">
      <slot :name="'level-' + level"></slot>
      <slot :name="Object.keys($slots)[level - 1]" v-if="Object.keys($slots)[level - 1] !== 'level-' + level">
      </slot>
    </div>
  </div>
</component>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'VS-FlexContainer',
  created () {
    this.levels = Object.keys(this.$slots).length
    console.log(Object.keys(this.$slots))
  },
  props: {
    schema: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: 'div'
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

.o-flexContainer__wrapper,
.o-flexContainer {
    display: flex;
    flex-flow: column;
}

</style>