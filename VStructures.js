import vFlexContainer from '@/src/flex/container'

export default {
    install (Vue, options) {
        Object.keys(this).filter(k => k !== 'install').forEach(component => {
            console.log('[VStructures] Registering', component)
            Vue.component(component, this[component])
        })
    },
    vFlexContainer
}