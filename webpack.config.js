// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

//export 
module.exports = {
    //parcel index.html
    //파일을 읽어들이기 시작하는 진입점 설정(js파일로 진입한다.)
    entry : './js/main.js',
    
    //결과물 (번들)을 반환하는 설정
    output : {
        // path : path.resolve(__dirname,'dist'),
        // filename : 'main.js',
        clean : true
    },

    module : {
        rules : [
            {
                //.css확장자로 끝나는 것을 찾는 정규식.
                //s라는 단어가 있을수도 없을 수도 있다는 표현.
                test : /\.s?css$/,
                use : [
                    //순서 중요
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                //.js로 끝나는 확장자
                test : /\.js$/,
                use : [
                    'babel-loader',
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins : [
        new HtmlPlugin({
            template : './index.html',
        }),
        new CopyPlugin({
            patterns : [
                { from: 'static' }
            ]
        })
    ],
    
    devServer : {
        host : 'localhost'
    }
}