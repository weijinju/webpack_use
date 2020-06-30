<template>
    <div class="title">
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
     </div>
</template>
<script>
    export default {
    name:"App",
    data(){
            return{
                message:'你好啊，webpack',
                name:'coderwhy'
            }
        },
        methods:{
            btnClick(){

            }
        }
    }
</script>
<style scoped>
    .title{
     color:green;
    }
</style>