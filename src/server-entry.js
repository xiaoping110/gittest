import createApp from './app';

export default (context) => {
    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        router.push(context.url);
        router.onReady(() => {
            const matchComponentd = router.getMatchedComponents(); //獲取匹配的组件

            if (matchComponentd.length > 0) {
                Promise.all(matchComponentd.map(component => {
                    if (component.asyncDate) {
                        return component.asyncDate(store);
                    }
                })).then(() => {
                    context.state = store.state;
                    resolve(app);
                }, () => {
                    reject("Error Store")
                })

            } else {
                reject({ code: 404 })
            }

        }, () => {
            reject("Error Router-Push")
        });
    })



}