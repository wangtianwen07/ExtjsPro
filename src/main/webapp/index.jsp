<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page contentType="text/html; charset=UTF-8" %>
<%
    String basePath = request.getContextPath();
%>
<head>
<!-- 设置可兼容ie8 -->
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>湖南移动计划建设管理系统</title>
</head>
<frameset rows="*,20" frameborder="no" border="0" framespacing="0">
<frame src="<%=basePath%>/pages/echarts/echartsManager.jsp"  frameborder="0" name="echartsManager" marginwidth="0" marginheight="0" noresize="noresize" frameborder="0" scrolling="no"/>
<frame src="<%=basePath%>/pages/echarts/echartsManagerFoot.jsp" frameborder="0" name="bottomFrame" marginwidth="0" noresize="noresize" marginheight="0" scrolling="no"/>
</frameset>
</html>
