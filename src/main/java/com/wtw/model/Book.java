package com.wtw.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
/**
 * 书籍类(父子关系)
 * @author wtw
 *
 */
@Entity(name="Book")
@Table(name="ext_book")
public class Book extends DomainObject implements Serializable{
	private static final long serialVersionUID = 7335300451043369635L;
	@Column(name="price",nullable=false)
	private BigDecimal price;//价格
	private String description;//概述
	private String content;//内容
	@Temporal(TemporalType.TIMESTAMP)
	private Date uploadTime;//创建时间（上传时间）
	@Temporal(TemporalType.TIMESTAMP)
	private Date finishTime;//阅完时间
	@ManyToOne(cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	@JoinColumn(name="type_id")
	private BookType type;
	@ManyToOne(targetEntity=Organization.class,cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	@JoinColumn(name="org_id")
	private Organization org;//出版商
	@ManyToOne(targetEntity=User.class,cascade={CascadeType.MERGE},fetch=FetchType.LAZY)
	@JoinColumn(name="user_id")
	private User user;//归属用户
	@ManyToOne(targetEntity=Book.class,cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	@JoinColumn(name="parent_id")
	private Book parent;//父书籍
	@OneToMany(mappedBy="parent",cascade=CascadeType.MERGE,fetch=FetchType.LAZY)
	private List<Book> children;//子书籍
	public BigDecimal getPrice() {
		return price;
	}
	public void setPrice(BigDecimal price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getUploadTime() {
		return uploadTime;
	}
	public void setUploadTime(Date uploadTime) {
		this.uploadTime = uploadTime;
	}
	public Date getFinishTime() {
		return finishTime;
	}
	public void setFinishTime(Date finishTime) {
		this.finishTime = finishTime;
	}
	public BookType getType() {
		return type;
	}
	public void setType(BookType type) {
		this.type = type;
	}
	public Organization getOrg() {
		return org;
	}
	public void setOrg(Organization org) {
		this.org = org;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Book getParent() {
		return parent;
	}
	public void setParent(Book parent) {
		this.parent = parent;
	}
	public List<Book> getChildren() {
		return children;
	}
	public void setChildren(List<Book> children) {
		this.children = children;
	}
}
