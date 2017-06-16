Ext.define('ET.view.report.Tabs',{
	extend: 'Ext.tab.Panel',
	alias: 'widget.reporttabs',
	region: 'center',
	items: [{
		title: '欢迎页',
		html: '本系统包括工建系统相关报表,欢迎使用!'
	}]
});