import Vue from 'vue'
import VStructures from '../VStructures.js'
import TestingGround from './testing-ground.vue'

Vue.use(VStructures)

const vue = new Vue({
    el: '#app',
    components: {
        dev: TestingGround
    },
    render: h => {
        return h('dev', null, null)
    }
})
