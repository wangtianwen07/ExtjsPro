Ext.define('ET.store.Reports',{
	extend: 'Ext.data.TreeStore',
	
	model: "ET.model.Report",
	autoLoad: true,
	root: {
		name: '报表菜单列表',
		expanded: true
	}
});