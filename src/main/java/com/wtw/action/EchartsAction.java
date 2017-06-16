package com.wtw.action;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
@Controller(value="EchartsAction")
@Scope(value="prototype")
public class EchartsAction extends ActionSupport{
	
	private String datas;
	
	public String getDatas() {
		return datas;
	}

	public void setDatas(String datas) {
		this.datas = datas;
	}

	public String rlmsTaskimportAnalyz() {
		setDatas("测试abc");
		return SUCCESS;
	}
}
