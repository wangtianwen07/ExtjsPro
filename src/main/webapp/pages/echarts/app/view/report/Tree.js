Ext.define('ET.view.report.Tree',{
	extend: 'Ext.tree.Panel',
	alias : 'widget.reporttree',
	region: 'west',
	width : 190,
	title: "功能菜单",
	iconCls : "icon-tree",
	hideHeaders: true,
	rootVisible: false,
	useArrows: true, 
	store: 'Reports',
	columns: [
		{xtype: 'treecolumn',header:'Name',dataIndex:'name',flex:1}
	]
});