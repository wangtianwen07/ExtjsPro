package com.wtw.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * 出版社
 * @author wtw
 *
 */
@Entity(name="Organization")
@Table(name="ext_organization")
public class Organization extends DomainObject implements Serializable{

	private static final long serialVersionUID = -3977237317836295603L;
	@Temporal(TemporalType.TIMESTAMP)
	private Date createTime;

	public Date getCreateTime() {
		return createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}
	
}
