//动态加载JS
/*Ext.require([
	'ET.view.report.Title',
	'ET.view.report.Tree']);*/

Ext.define("ET.view.Viewport", {
    extend: "Ext.container.Viewport",
    layout: 'border',
    items: [{
        //region: 'north',
        xtype: 'reporttitle'
    }, {
        xtype: 'reporttree',
    }, {
        xtype: 'reporttabs'
    }]
});