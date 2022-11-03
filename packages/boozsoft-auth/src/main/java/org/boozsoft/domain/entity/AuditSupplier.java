package org.boozsoft.domain.entity;

import lombok.Data;
import java.io.Serializable;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.experimental.Accessors;
import io.swagger.annotations.ApiModel;
import org.springframework.data.annotation.Id;
import io.swagger.annotations.ApiModelProperty;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.relational.core.mapping.Table;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;

/**
 * @Description  
 * @Author  myh
 * @Date 2022-03-16 
 */

@Data
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@Table ( "audit_supplier" )
@ApiModel(value="供应商审计记录",description="供应商审计记录")
public class AuditSupplier  implements Serializable {


	@ApiModelProperty(value = "主键")
	@Id
	@CreatedBy
	@JsonSerialize(using = ToStringSerializer.class)
	private String id;

	@ApiModelProperty(value = "唯一编码")
	private String uniqueCode;

	@ApiModelProperty(value = "客户编码（不允许重复）")
	private String custCode;

	@ApiModelProperty(value = "客户全称")
	private String custName;

	@ApiModelProperty(value = "客户简称（不允许重复）")
	private String custAbbname;

	@ApiModelProperty(value = "客户分类唯一码")
	private String uniqueCustclass;

	@ApiModelProperty(value = "税号")
	private String custSregcode;

	@ApiModelProperty(value = "开户银行")
	private String custBank;

	@ApiModelProperty(value = "银行账号")
	private String custAccount;

	@ApiModelProperty(value = "创建日期")
	private String custDevdate;

	@ApiModelProperty(value = "总公司客户唯一码")
	private String uniqueCodeCcus;

	@ApiModelProperty(value = "对应供应商唯一码")
	private String uniqueCodeSupplier;

	@ApiModelProperty(value = "行业性质名称")
	private String industryclassName;

	@ApiModelProperty(value = "联系人")
	private String contacts;

	@ApiModelProperty(value = "电话")
	private String telephone;

	@ApiModelProperty(value = "地址一")
	private String address1;

	@ApiModelProperty(value = "地址二")
	private String address2;

	@ApiModelProperty(value = "手机")
	private String cellPhoneNum;

	@ApiModelProperty(value = "Email")
	private String email;

	@ApiModelProperty(value = "所属国家名称")
	private String countryName;

	@ApiModelProperty(value = "所属网址")
	private String website;

	@ApiModelProperty(value = "备注")
	private String remarks;

	@ApiModelProperty(value = "是否停用(1.启用;0停用)")
	private String flag;

	@ApiModelProperty(value = "创建人：操作员唯一码")
	private String beiyong1;

	@ApiModelProperty(value = "修改时间")
	private String beiyong2;

	@ApiModelProperty(value = "修改人：操作员唯一码")
	private String beiyong3;

	@ApiModelProperty(value = "邮政编码")
	private String beiyong4;

	private String beiyong5;

	private String beiyong6;

	private String beiyong7;

	private String beiyong8;

	private String beiyong9;

	private String beiyong10;

	@ApiModelProperty(value = "1内部客户/2外部客户")
	private String manageType;

	@ApiModelProperty(value = "银行开户地")
	private String bankArea;

	@ApiModelProperty(value = "银行行号")
	private String bankCode;

	@ApiModelProperty(value = "省")
	private String province;

	@ApiModelProperty(value = "市")
	private String city;

	@ApiModelProperty(value = "区")
	private String area;

	private String tenantId;

	@ApiModelProperty(value = "是否假删除1是")
	private String isDel;

	private String delName;

	private String delDate;

	@ApiModelProperty(value = "操作类型：1删除、0修改")
	private String optMethod;

	@ApiModelProperty(value = "操作员姓名")
	private String optUsername;

	@ApiModelProperty(value = "操作时间")
	private String optTime;
}
