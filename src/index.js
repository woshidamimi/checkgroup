import comp from './comp'


if(typeof window != undefined && window.Vue) {
    console.log('vue')
    comp.install(window.Vue)
}


export default comp