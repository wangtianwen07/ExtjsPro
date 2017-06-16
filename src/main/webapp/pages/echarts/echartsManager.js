/*Echarts报表系统采用Extjs4.2 MVC架构*/
//echartsManager.js相当于Application.js(或app.js)，为Echarts报表系统入口
Ext.application({
    name: 'ET',

    extend: 'ET.Application',
    
    autoCreateViewport: true
});

