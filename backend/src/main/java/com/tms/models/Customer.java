package com.tms.models;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "customers", schema = "public")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customer_id")
	private int customerId;

	@Column(name = "company_name")
	private String companyName;

	@Column(name = "username")
	private String username;

	@Column(name = "shipping_phone")
	private String shippingPhone;

	@Column(name = "payables_phone")
	private String payablesPhone;

	@Column(name = "tax_id")
	private int taxId;

	@Column(name = "phone_number")
	private String phoneNumber;

	@Column(name = "fax_number")
	private String faxNumber;

	@Column(name = "poc_email")
	private String pocEmail;

	@Column(name = "poc_firstname")
	private String pocFirstName;

	@Column(name = "poc_lastname")
	private String pocLastName;

	@Column(name = "poc_phone")
	private String pocPhone;

	@Column(name = "street_address")
	private String street;

	@Column(name = "city")
	private String city;

	@Column(name = "state")
	private String state;

	@Column(name = "zip")
	private int zip;

	@Column(name = "date_submitted")
	private Timestamp dateSubmitted;

	@Column(name = "credit_line")
	private int creditLine;

	@Column(name = "d_b_score")
	private int dbScore;

	@Column(name = "password")
	private String password;


	public Customer() {
		super();

	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCompanyName() {
		return companyName;
	}

	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getShippingPhone() {
		return shippingPhone;
	}

	public void setShippingPhone(String shippingPhone) {
		this.shippingPhone = shippingPhone;
	}

	public String getPayablesPhone() {
		return payablesPhone;
	}

	public void setPayablesPhone(String payablesPhone) {
		this.payablesPhone = payablesPhone;
	}

	public int getTaxId() {
		return taxId;
	}

	public void setTaxId(int taxId) {
		this.taxId = taxId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getFaxNumber() {
		return faxNumber;
	}

	public void setFaxNumber(String faxNumber) {
		this.faxNumber = faxNumber;
	}

	public String getPocEmail() {
		return pocEmail;
	}

	public void setPocEmail(String pocEmail) {
		this.pocEmail = pocEmail;
	}

	public String getPocFirstName() {
		return pocFirstName;
	}

	public void setPocFirstName(String pocFirstName) {
		this.pocFirstName = pocFirstName;
	}

	public String getPocLastName() {
		return pocLastName;
	}

	public void setPocLastName(String pocLastName) {
		this.pocLastName = pocLastName;
	}

	public String getPocPhone() {
		return pocPhone;
	}

	public void setPocPhone(String pocPhone) {
		this.pocPhone = pocPhone;
	}

	public String getStreetAddress() {
		return street;
	}

	public void setStreetAddress(String streetAddress) {
		this.street = streetAddress;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	public Timestamp getDateSubmitted() {
		return dateSubmitted;
	}

	public void setDateSubmitted(Timestamp dateSubmitted) {
		this.dateSubmitted = dateSubmitted;
	}

	public int getCreditLine() {
		return creditLine;
	}

	public void setCreditLine(int creditLine) {
		this.creditLine = creditLine;
	}

	public int getDbScore() {
		return dbScore;
	}

	public void setDbScore(int dbScore) {
		this.dbScore = dbScore;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", companyName=" + companyName + ", username=" + username + "]";
	}

	public Customer(int customerId, String companyName, String username, String shippingPhone, String payablesPhone,
			int taxId, String phoneNumber, String faxNumber, String pocEmail, String pocFirstName, String pocLastName,
			String pocPhone, String street, String city, String state, int zip, Timestamp dateSubmitted, int creditLine,
			int dbScore, String password) {
		super();
		this.customerId = customerId;
		this.companyName = companyName;
		this.username = username;
		this.shippingPhone = shippingPhone;
		this.payablesPhone = payablesPhone;
		this.taxId = taxId;
		this.phoneNumber = phoneNumber;
		this.faxNumber = faxNumber;
		this.pocEmail = pocEmail;
		this.pocFirstName = pocFirstName;
		this.pocLastName = pocLastName;
		this.pocPhone = pocPhone;
		this.street = street;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.dateSubmitted = dateSubmitted;
		this.creditLine = creditLine;
		this.dbScore = dbScore;
		this.password = password;
	}
}
