echo "# createvue" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:xiaoping110/createvue.git
git push -u origin master



git remote add origin git@github.com:xiaoping110/createvue.git
git branch -M main
git push -u origin master


- 通过一份代码 打包出来两份逻辑（前端、服务器）
-   前端拿到打包出来的js，后端通过打包的结果渲染出字符串
-   前端的js + 后端渲染的字符串 = 扔到浏览器上


npm webpack@4 webpack-cli@ webpack-dev-server@ vue-loader vue-style-loader css-loader @babel/core @babel/preset-env balel-loader  vue-template-compiler html-webpack-plugin


远程修改~~~
