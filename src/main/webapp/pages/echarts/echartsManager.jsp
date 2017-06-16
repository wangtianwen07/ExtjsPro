<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String basePath = request.getContextPath();
%>
<head>
<title>EchartReport</title>
<!-- 设置可兼容ie8 -->
<!-- <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" /> -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

<!-- 引入extjs4.2及css -->
<link rel="stylesheet" type="text/css" href="<%=basePath%>/plugins/ext4/resources/css/ext-all.css"/>
<link rel="stylesheet" type="text/css" href="<%=basePath%>/theme/css/icon.css"/>
<!-- 引入echarts -->
<script type="text/javascript" src="<%=basePath%>/plugins/echarts/echarts.js"></script>
<script type="text/javascript" src="<%=basePath%>/plugins/ext4/bootstrap.js"></script>
<!-- Echarts报表系统入口 -->
<script type="text/javascript" src="<%=basePath%>/pages/echarts/echartsManager.js"></script>
</head>
<body>
</body>
</html>
