import { defineConfig } from 'umi';
import pxtorem from 'postcss-pxtorem'
import autoprefixer from 'autoprefixer'
// let target = 'http://11.2.33.222:8080';
let PUBLIC_PATH
if (!process.env.UMI_ENV) {
    PUBLIC_PATH = '/'
} else if (process.env.UMI_ENV === 'test') {
    PUBLIC_PATH = 'https://assets.mehome.shop/octopus-hongliao-mobile/'
} else {
    PUBLIC_PATH = 'https://assets.melive.shop/octopus-hongliao-mobile/'
}
export default defineConfig({
    publicPath: PUBLIC_PATH,
    outputPath: 'dist',
    scripts: ['https://assets.melive.shop/common/axios@0.18.0.min.js', 'https://assets.melive.shop/common/device-uuid.min.js', 'https://res2.wx.qq.com/open/js/jweixin-1.6.0.js'],
    routes: [
        { path: '/haha', component: '@/pages/haha' },

        {
            path: '/',
            component: '@/pages/Tabar/index',
            routes: [
                { path: '/', redirect: '/dashboard' },
                { exact: true, path: '/dashboard', component: '@/pages/index' },
                { exact: true, path: '/docs', component: '@/pages/docs/docs' },
            ]
        },
    ],
    define: {
        // 重点就是这个属性了，设置全局变量
        // 在项目中，可以通过process.env.NODE_ENV 或者
        // process.env.UMI_ENV 或者process.env.date得到对应环境的值
        'process.env': {
            UMI_APP_WEBSCOKET_URL: "wss://ws.mehome.shop/ws/",
            UMI_APP_FILE_URL: 'https://cdn-hz.mehome.shop/',
            UMI_APP_NEW_API: 'https://gateway.mehome.shop/',
            NODE_ENV: 'dev',
            UMI_ENV: 'dev',
            date: new Date().toLocaleDateString()
        },
    },
    /* hd即高清方案,移动端开启，pc端不建议开启，会自动转换px为rem,以750为单位1rem=100px=baseFontSize,
       其他屏按宽度计算baseFontSize,例如设计稿为1920，那么baseFontSize=256,rem计算公式为px/256*/
    // hd: true,
    extraPostCSSPlugins: [
        pxtorem({
            rootValue: 16, //这里根据设计稿大小配置,一般是375
            propList: ['*', '!max-width'],
            exclude: /node_modules/i,
            minPixelValue: 10, // 过滤掉.am-开头的class，不进行rem转换
        }),
        autoprefixer(),
    ],
    devtool: process.env.NODE_ENV === 'dev' ? 'eval' : false,
    fastRefresh: false,
    // mfsu: {},
    alias: {
        '@': '/src',
    },
    hash: true,
    proxy: {
        // '/govern': {
        //     target,
        //     changeOrigin: true,
        // },
        // '/label': {
        //     target,
        //     changeOrigin: true,
        // },
    },
});


