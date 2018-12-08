const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
console.log(__dirname)
// path.join(参数1,参数2)  将参数1和参数2合并

//配置出口文件和入口文件的路径
//path.join:用于连接路径，该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是/,windows系统是\
//path.resolve:将参数解析为绝对路径，也可以变成相对路径
const PATH = {
    app:path.join(__dirname,"./src/index.js"),
    build:path.join(__dirname,"./dist")
}
//webpack的配置
module.exports={
    //入口文件
    entry:{
        app:PATH.app
    },
    //出口文件
    output:{
        //出口文件名字，name与app对应
        filename:"[name].js",
        //出口地址
        path:PATH.build 
    },
    //处理模块 遇到css .js等文件如何打包
    module:{
        rules:[
            {   //匹配文件
                test:/\.js$/,
                //指定loader
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/env","@babel/react"]
                    }
                }
            },
            {   //匹配文件
                test:/\.(css|scss)$/,
                //指定loader
                use:['style-loader','css-loader','sass-loader']
            }
        ]
     

    },
    //插件
    plugins:[
        new htmlWebpackPlugin({
            template:"./index.html",
            filename:"index.html",
            date:new Date()
        })
    ]
}