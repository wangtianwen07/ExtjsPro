//CommonFormPanel
/**
 var _queryform = Ext.create('Wtx.common.CommonFormPanel', {
		title : '查询条件',
		fields : [{
			labelWidth : 75,
			width : 220,
			labelAlign : 'right',
			fieldLabel : '查询码',
			name : 'cxm'
		}, {
			labelWidth : 75,
			width : 220,
			labelAlign : 'right',
			fieldLabel : '简称',
			name : 'short_name'
		}, {
			labelWidth : 75,
			width : 180,
			labelAlign : 'right',
			xtype : 'DictCustComboBox',
			fieldLabel : '行政级别',
			dict : 'codetype=xqjb&ignore=true&ignoretext=请选择',
			name : 'organ_level',
			value : ''
		}, {
			name : '_configname',
			value : 'dictionary.Default',
			xtype : 'hidden'
		}, {
			name : '_configitem_name',
			value : 'country_dictionary',
			xtype : 'hidden'
		}],
		buttons : [{
			text : '查询',
			xtype:'CommonButton',
			iconCls : 'icon-refresh',
			handler : function() {
				if (!_queryform.getForm().isValid()) {
					showErr("必须输入必须的查询条件！", function() {
						MyExt.falidFocus(_queryform);
					});
					return;
				}
				_grid.getSelectionModel().clearSelections();
				_grid.getStore().reloadData(_queryform.getForm().getValues());
			}
		}, {
			text : '修改',
			id : 'edit_show',
			xtype:'CommonButton',
			iconCls : 'icon-edit',
			resource_code:'1080305',
			operate_code:'0002',
			handler : function() {
				edit();
			}
		}, {
			text : '新增',
			xtype:'CommonButton',
			resource_code:'1080305',
			operate_code:'0001',
			iconCls : 'icon-add',
			handler : function() {
				initAddWindow();
				// 新增
				_addwin.optype = 'add'; //新增还是修改标志, 在show之前
				_addwin.setTitle("新增辖区数据");
				_addwin.show();
				_addForm.getForm().reset();
				
				_addForm.getForm().findField('_isadd').setValue('2');
			}
		}]
	});
 */
Ext.define('ET.view.common.CommonQueryForm',{
	extend: 'Ext.form.Panel',
	alias: 'widget.CommonQueryForm',
	xtype: 'CommonQueryForm',
	initComponent: function() {
		var me = this;
		if(me.fields && !me.items) {
			var items = [{
				layout: 'column',
				xtype: 'fieldset',
				items:[]
			}];
			
			for(var i=0;i<me.fields.length;i++) {
				var item = me.fields[i];
				if(item.title) {
					if(i!=0) {
						
					}
				}
			}
		}
	}
});