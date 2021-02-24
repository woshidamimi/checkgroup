

<template>
    <div>
        <!-- <el-button>btn</el-button>
        <el-tag>aaaaaa</el-tag>
        <el-input v-model="damimi"></el-input> -->
        <animate-box></animate-box>
        <check-group v-model="damimi"></check-group>
        <check-child :disable="true" v-model="item.isCheck" :key="item.id" v-for="item in list"></check-child>
        {{damimi}}
        <!-- <simple-button></simple-button> -->
    </div>
</template>
<script>
import AnimateBox from './pages/animate'
import CheckGroup from './checkbox/CheckGroup';
import CheckChild from './checkbox/CheckChild';
export default {
    name: 'App',
    components: {
        AnimateBox,
        CheckGroup,
        CheckChild
    },
    data(){
        return {
            damimi: 'default',
            list: [{
               name: 'how',
               isCheck: true,
               disable: true
            },{
                name: 'how',
                isCheck: true,
            },{
                 name: 'how',
                 isCheck: true,
            },{
                 name: 'how',isCheck: true,
            },{
                 name: 'how',isCheck: true,
            }]
        }
    }
}
</script>
<style>
@import url('./fonts/font.css');
</style>