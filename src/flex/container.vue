<template>
    <div class="o-flexContainer" :class="schema || ''">
        <div class="o-flexContainer__wrapper" :class="schema ? schema + '__wrapper' : ''">
            <div ref="column" v-for="level in levels" :key="level"
            class="o-flexContainer__column"
            :class="[schema ? schema + '__column' : '', '-level-' + level]">
                <slot :name="'level-' + level"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
    name: 'VS-FlexContainer',
    created () {
        this.levels = Object.keys(this.$slots).length
    },
    props: {
        schema: {
            type: String,
            default: null
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