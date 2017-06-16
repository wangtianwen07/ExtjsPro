Ext.define('ET.view.report.Title',{
	extend: 'Ext.panel.Panel',
	alias : 'widget.reporttitle',
	region: 'north',
	height: 25,
	header: false,
	split : true,
	collapsible : true,
	animCollapse :true,
	collapseMode:'mini',
	title:'',
	html : '',
	bbar: [{
				text:'',
				id:'hotMenuBtn',
				iconCls : 'icon-hot',
				tooltip:'最近使用的功能',
				tooltipType:'title',
				hidden:false,
				menu:{
					id:'redian_menu',
					xtype:'menu'
				}
		   },new Ext.toolbar.Toolbar({
		       	 frame:false,
		       	 border:false,
		       	 items:['-'
		       	 	
		       	 ]
	        }),
	        {text:'',
			    iconCls : 'icon-search',
			    //handler:searchMenu,
				tooltip:'快速搜索菜单资源',
				hidden:false,
				tooltipType:'title'
			}]
});