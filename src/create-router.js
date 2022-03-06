import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Foo = () =>
    import ('./componets/Foo');
const Bar = () =>
    import ('./componets/Bar');

export default () => {
    const router = new VueRouter({
        mode: 'history',
        routes: [{
                path: '/foo',
                component: Foo
            },
            {
                path: '/bar',
                component: Bar
            }
        ]
    })

    return router;
}