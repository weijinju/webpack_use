/**
 * Created by Administrator on 2020/6/26.
 */
export default {
    template:`
    <div>
        <h2>{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <h2>{{name}}</h2>
    </div>`,
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