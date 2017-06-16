Ext.define('ET.view.report.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.reportgrid',
    //title: '数据报表',
    store: 'Grids',
    
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
    	name: 'localConMgr',//分公司建设经理
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
    columns: [
        { text: '项目编码',  dataIndex: 'projectNum' },
        { text: '项目名称',  dataIndex: 'projectName' },
        { text: '省计划经理',  dataIndex: 'provincePlanMgr' },
        { text: '省建设经理',  dataIndex: 'provinceConMgr' },
        { text: '分公司计划经理',  dataIndex: 'localPlanMgr' },
        { text: '分公司建设经理',  dataIndex: 'localConMgr' },
        { text: '专业名称',  dataIndex: 'major' },
        { text: '建设单位',  dataIndex: 'constructUnit' },
        { text: '地市',  dataIndex: 'localCity' },
        { text: '同步资管录入的段落数 ',  dataIndex: 'ifTaskNum' },
        { text: '计划建设平台已批复的段落数',  dataIndex: 'replyTaskNum' },
        { text: '计划建设平台已派工的段落数',  dataIndex: 'allocateTaskNum' },
        { text: '计划建设平台已完工的段落数',  dataIndex: 'completedTaskNum' }
    ]
});