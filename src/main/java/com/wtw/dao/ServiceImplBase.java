package com.wtw.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate4.HibernateTemplate;
import org.springframework.orm.hibernate4.support.HibernateDaoSupport;

public class ServiceImplBase extends HibernateDaoSupport {

	@Autowired
	private HibernateTemplate hibernateTemplete;

	public HibernateTemplate getHibernateTemplete() {
		return hibernateTemplete;
	}

	public void setHibernateTemplete(HibernateTemplate hibernateTemplete) {
		this.hibernateTemplete = hibernateTemplete;
	}

	
	
	
}
