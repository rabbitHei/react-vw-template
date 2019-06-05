## react-vw-template
vw 适配模板

## 使用  
需要取消适配,可注释config/webpack.config下
```sh
//**** vw功能取消注释区域
    require("postcss-aspect-ratio-mini"),
    require("postcss-write-svg")({ utf8: false }),
    require("postcss-cssnext"),
    require("postcss-px-to-viewport")({
        viewportWidth: 375,
        viewportHeight: 667,
        unitPrecision: 3,
        viewportUnit: 'vw',
        selectorBlackList: ['.ignore', '.hairlines'],
        minPixelValue: 1,
        mediaQuery: false
    }),
    require("postcss-viewport-units"),
    require("cssnano")({
        preset: "advanced",
        autoprefixer: false,
        "postcss-zindex": false
    }),
//**** vw功能取消注释区域
```