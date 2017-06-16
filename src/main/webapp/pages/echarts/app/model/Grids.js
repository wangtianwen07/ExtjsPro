Ext.define('ET.model.Grids',{
	extend: 'Ext.data.Model',
	fields: [{ 
    	name: 'projectNum',//项目编码
    },{ 
    	name: 'projectName', //项目名称
    },{
    	name: 'provincePlanMgr',//省计划经理
    },{
    	name: 'provinceConMgr',//省建设经理
    },{
    	name: 'localPlanMgr',//分公司计划经理
    },{
    	name: 'localConMgr',//建设单位
    },{
    	name: 'major',//专业名称
    },{
    	name: 'constructUnit',//建设单位
    },{
    	name: 'localCity',//地市
    },{
    	name: 'ifTaskNum',//同步资管录入的段落数    
    },{
    	name:'replyTaskNum',//计划建设平台已批复的段落数
    },{
    	name:'allocateTaskNum',//计划建设平台已派工的段落数  
    },{
    	name:'completedTaskNum',//计划建设平台已完工的段落数
    }],
    
    proxy: {
        type: 'ajax',
        url:"/epmsTest/echartsReportAction.do?method=query",
		reader:{
			type:"json",
			root:"datas"
		},
		writer:{
			type:"json"
		}
    }
});