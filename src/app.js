import Vue from 'vue'
import App from './App.vue';

export default () => {
    const app = new Vue({
        el: '#app',
        render: h => h(App)
    })

    return { app };
}

//1.以前代码在前端跑的时候，每个客户段都拥有一个独立的实例
//2.每次客户端访问都会产生一个新的实例，这里导出一个函数