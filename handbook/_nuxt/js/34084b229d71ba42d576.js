(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{416:function(n,e,t){"use strict";t.r(e),e.default='# 在微信小程序中使用 ECharts\n\n[echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin) 项目提供了一个小程序组件，用这种方式可以方便地使用 ECharts。\n\n## 使用方式\n\n1. 下载该项目\n2. 如有必要，将 `ec-canvas` 目录下的 `echarts.js` 替换为最新版的 ECharts。如果希望减小包体积大小，可以使用[自定义构建](${mainSitePath}/builder.html)生成并替换 `echarts.js`\n3. `pages` 目录下是使用的示例文件，可以作为参考，或者删除不需要的页面。\n\n更详细的说明请参见 [echarts-for-weixin](https://github.com/ecomfe/echarts-for-weixin) 项目。\n\n## 注意事项\n\n最新版的 ECharts 微信小程序支持微信 Canvas 2d，当用户的基础库版本 >= 2.9.0 且没有设置 `force-use-old-canvas="true"` 的情况下，使用新的 Canvas 2d（默认）。\n\n使用新的 Canvas 2d 可以提升渲染性能，解决非同层渲染问题，强烈建议开启。\n\n更详细的说明请参见 [Canvas 2d 版本要求](https://github.com/ecomfe/echarts-for-weixin#canvas-2d-%E7%89%88%E6%9C%AC%E8%A6%81%E6%B1%82)。\n'}}]);