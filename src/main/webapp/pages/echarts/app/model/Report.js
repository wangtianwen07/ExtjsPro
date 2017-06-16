Ext.define('ET.model.Report', {
    extend: 'Ext.data.Model',
    fields: [{ 
    	name: 'boId',
    	type: 'int' 
    },{ 
    	name: 'name', 
    	type: 'string'
    },{
    	name: 'url',
    	type: 'string'
    },{
    	name : 'expanded',   type : 'bool',    defaultValue : true 
    }],
    
    proxy: {
        type: 'ajax',
        url:"/echarts/Echarts_listReports.do",
		reader:{
			type:"json",
			root:"children"
		},
		writer:{
			type:"json"
		}
    }
});