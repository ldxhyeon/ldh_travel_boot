package com.my.ldh_travel_boot.vo;

public class ShopImg {
	
	private int shop_img_idx=0;
	private int shop_idx=0;
	private String img_url=null;
	private String created_date=null;
	
	
	public int getShop_img_idx() {
		return shop_img_idx;
	}
	public void setShop_img_idx(int shop_img_idx) {
		this.shop_img_idx = shop_img_idx;
	}
	public int getShop_idx() {
		return shop_idx;
	}
	public void setShop_idx(int shop_idx) {
		this.shop_idx = shop_idx;
	}
	public String getImg_url() {
		return img_url;
	}
	public void setImg_url(String img_url) {
		this.img_url = img_url;
	}
	public String getCreated_date() {
		return created_date;
	}
	public void setCreated_date(String created_date) {
		this.created_date = created_date;
	}
	
}
