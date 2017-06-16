Ext.define('ET.model.ComboBox', {
    extend: 'Ext.data.Model',
    fields: [{ 
    	name: 'projectNum',
    	type: 'string' 
    },{ 
    	name: 'projectName', 
    	type: 'string'
    }],
    
    proxy: {
        type: 'ajax',
        url:"/epmsTest/echartsReportAction.do?method=getProjects",
		reader:{
			type:"json",
			root:"datas"
		},
		writer:{
			type:"json"
		}
    }
});