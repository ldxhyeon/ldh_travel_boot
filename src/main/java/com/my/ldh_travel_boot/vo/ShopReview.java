package com.my.ldh_travel_boot.vo;

public class ShopReview {
	
	
	private int sh_rv_idx=0;
	private int shop_idx=0;
	private int user_idx=0;
	private int rank=0;
	private String content=null;
	private String created_date=null;
	
	
	//user 
	private String nickname = null;
	
	
	
	
	
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public int getSh_rv_idx() {
		return sh_rv_idx;
	}
	public void setSh_rv_idx(int sh_rv_idx) {
		this.sh_rv_idx = sh_rv_idx;
	}
	public int getShop_idx() {
		return shop_idx;
	}
	public void setShop_idx(int shop_idx) {
		this.shop_idx = shop_idx;
	}
	public int getUser_idx() {
		return user_idx;
	}
	public void setUser_idx(int user_idx) {
		this.user_idx = user_idx;
	}
	public int getRank() {
		return rank;
	}
	public void setRank(int rank) {
		this.rank = rank;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getCreated_date() {
		return created_date;
	}
	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}
	
	
	
	
	
}
