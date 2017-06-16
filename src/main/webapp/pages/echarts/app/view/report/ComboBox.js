Ext.define('ET.view.report.ComboBox',{
	extend: 'Ext.form.field.ComboBox',
	alias: 'widget.reportComboBox',
	fieldLabel: 'Choose State',
    store: 'ComboBox',
    queryMode: 'local',
   // displayField: 'projectNum',
    renderTo: Ext.getBody(),
    tpl: Ext.create('Ext.XTemplate',
    		 '<tpl for=".">',
    		 	'<div class="x-boundlist-item">{projectNum}-{projectName}</div>',
    		 '</tpl>'
    		 ),
    displayTpl: Ext.create('Ext.XTemplate',
    		 '<tpl for=".">',
    		 	'{projectNum}',
    		 '</tpl>'
    		 ),
    valueField: 'projectNum'
});