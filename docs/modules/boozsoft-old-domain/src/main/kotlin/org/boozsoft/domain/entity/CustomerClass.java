package org.boozsoft.domain.entity;


import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Table;

@Data
@Table ("customer_class" )
@ApiModel(value="客户分类",description="客户分类")
@NoArgsConstructor
public class CustomerClass {

	@Id
	@CreatedBy
	@JsonSerialize(using = ToStringSerializer.class)
	@ApiModelProperty(value = "主键", position = 0)
	private String id;

	@ApiModelProperty(value = "唯一编码", position = 1)
	private String uniqueCustclass;

	@ApiModelProperty(value = "客户分类编码", position = 2)
	private String cusClass;

	@ApiModelProperty(value = "客户分类级次，与会计科目级次类似", position = 3)
	private String cusClassGrade;

	@ApiModelProperty(value = "上级客户分类唯一编码", hidden = true)
	private String parentId;

	@ApiModelProperty(value = "客户分类名称", position = 4)
	private String cusCclassName;

	@ApiModelProperty(value = "是否末级分类（1是，0否）", position = 5)
	private String cusBend;

	@ApiModelProperty(value = "是否停用(1.启用;0停用)", position = 6)
	private String flag;

	private String beiyong1;

	private String beiyong2;

	private String beiyong3;

	private String beiyong4;

	private String beiyong5;

	@ApiModelProperty(value = "客户分类级次编码（默认3位）", position = 12)
	private String cusGradeCode;

	@Transient
	private String superClassName;

	@Transient
	private String label;
	@Transient
	private String value;
	@Transient
	private String title;
	public CustomerClass(String uniqueCustclass, String cusClass, String cusClassGrade, String parentId, String cusCclassName, String cusBend, String flag, String cusGradeCode) {
		this.uniqueCustclass = uniqueCustclass;
		this.cusClass = cusClass;
		this.cusClassGrade = cusClassGrade;
		this.parentId = parentId;
		this.cusCclassName = cusCclassName;
		this.cusBend = cusBend;
		this.flag = flag;
		this.cusGradeCode = cusGradeCode;
	}
}
