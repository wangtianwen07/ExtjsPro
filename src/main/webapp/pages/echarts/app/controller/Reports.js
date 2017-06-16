Ext.define('ET.controller.Reports',{
	extend: 'Ext.app.Controller',
	models:['Report','ComboBox','Grids'],
	stores:['Reports','Grids','ComboBox'],
	views:['report.Title','report.Tree','report.Tabs','report.Form','report.Grid','report.ComboBox'],
	refs: [{
		 ref: 'reporttabs',
         selector: 'reporttabs'
	},{
		ref: 'reportgrid',
		selector: 'reportgrid'
	}],
	init: function() {
		console.log("controller init...");
		this.control({
			'reporttree': {
				selectionchange: 'onNavSelectionChange'
			},
			'reportform button[action=query]': {
				click: 'query'
			}
		});
	},
	query: function(button) {
		form = button.up('form');
		paramss = form.getValues();//获取表单数据并转成String
		store = this.getReportgrid().getStore();
		store.load({
		    params : paramss
		});
		store.reload();
	},
	onNavSelectionChange: function(selModel, records) {
		 var record = records[0];
		 key = record.get('boId');
		 name = record.get('name');
		 url = record.get('url');
		 if(url) {
			 tabs = this.getReporttabs();//ext自动生成的getter方法
			 var tab = tabs.items.getByKey(key);
			 if(tab) {
				 tabs.setActiveTab(tab);
			 } else {
				 tab = Ext.create('Ext.panel.Panel', {
					 	id: key,
					 	title: name,
					    closable:true,
					    autoScroll: true,
					    layout: 'auto',
					    items: [{
					    	xtype: 'reportform',
					    	height:70
					    },{
					    	xtype: 'reportgrid',
					    	height: 400
					    },{
					    	xtype: 'panel',
					    	title: '图形报表',
					    	height: 400,
					    	autoScroll: true,
					    	html: '这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>这里是图形报表<br>'
					    }]
				 });
				 tabs.add(tab);
				 tabs.setActiveTab(tab); 
			 }
		 } 
	}
});