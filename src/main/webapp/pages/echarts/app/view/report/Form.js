Ext.define('ET.view.report.Form', {
	extend: 'Ext.form.Panel',
	alias: 'widget.reportform',
    //title: '查询条件',
    layout: 'column',
    bodyStyle : 'padding:5px 3px 2px 3px',
    defaultType: 'textfield',
    items: [{
    	fieldLabel: '项目编码',
        labelWidth : 55,
        name: 'projectNum',
        xtype: 'reportComboBox',
        allowBlank: true,
        columnWidth: 0.2,
        padding:'5px 10px 2px 3px'
    },{
        fieldLabel: '项目名称',
        labelWidth : 55,
        name: 'projectName',
        allowBlank: true,
        columnWidth: 0.2,
        padding:'5px 10px 2px 3px'
    },{
        fieldLabel: '省计划经理',
        labelWidth : 65,
        name: 'provincePlanMgr',
        allowBlank: true,
        columnWidth: 0.2,
        padding:'5px 10px 2px 3px'
    },{
        fieldLabel: '省建设经理',
        labelWidth : 65,
        name: 'provinceConMgr',
        allowBlank: true,
        columnWidth: 0.2,
        padding:'5px 10px 2px 3px'
    }],
    buttons:[{
		text : '查询',
		action: 'query'
	},{
		text : '重置',
		handler : function() {
			this.up('form').getForm().reset();
		}
	}]
});