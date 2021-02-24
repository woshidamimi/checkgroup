<template>
    <div>
        <button @click="handleClick">btn</button>
        <div :class="[canRotate ? 'rotate': 'normal', 'div-box']">

        </div>
    </div>
</template>
<script>
export default {
    name: 'AnimateBox',
    data() {
        return {
            canRotate: false
        }
    },
    methods: {
        handleClick() {
            this.canRotate = false;
           setTimeout(() => {
                this.canRotate = true;
           }, 3000);
        }
    }
}
</script>
<style>
.div-box{
    width: 200px;
    margin-left: 200px;
    height: 200px;
    background: skyblue;
    transition: all 3s;
}
.normal{
     transform: rotate(0deg);

}
.rotate{
    transform: rotate(1380deg)
}
</style>