package com.wtw.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * 书籍类型
 * @author wtw
 *
 */
@Entity
@Table(name="ext_booktype")
public class BookType extends DomainObject implements Serializable{

	private static final long serialVersionUID = -8629485564363154903L;

	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;//创建时间

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
}
