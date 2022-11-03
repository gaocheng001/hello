package org.boozsoft.domain.vo;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.Id;

@Data
@EqualsAndHashCode(callSuper=false)
@Accessors(chain = true)
@ApiModel(value = "GroupDefinedFileAccountVo对象", description = "GroupDefinedFileAccountVo对象")
public class GroupDefinedFileAccountVo {

    @Id
    @ApiModelProperty(value = "ID", hidden = true)
    @CreatedBy
    @JsonSerialize(using = ToStringSerializer.class)
    private String id;
    @ApiModelProperty(value = "唯一编码", hidden = true)
    private String uniqueCode;
    @ApiModelProperty(value = "分配类型(1,组织;2,账套)", hidden = true)
    private String ctype;
    @ApiModelProperty(value = "组织ID", hidden = true)
    private String originId;
    @ApiModelProperty(value = "租户ID", hidden = true)
    private String tenantId;
    @ApiModelProperty(value = "分配人", hidden = true)
    private String assignUser;
    @ApiModelProperty(value = "分配人真实姓名", hidden = true)
    private String assignUserName;
    @ApiModelProperty(value = "分配时间", hidden = true)
    private String assignDate;
    @ApiModelProperty(value = "引入状态(0,未引入;1,已引入)", hidden = true)
    private String flag;
    @ApiModelProperty(value = "引入人", hidden = true)
    private String acceptUser;
    @ApiModelProperty(value = "引入人真实姓名", hidden = true)
    private String acceptUserName;
    @ApiModelProperty(value = "引入时间", hidden = true)
    private String acceptDate;
    @ApiModelProperty(value = "自定义项设置编码", hidden = true)
    private String definedCode;
    @ApiModelProperty(value = "自定义项设置名称", hidden = true)
    private String definedName;
    @ApiModelProperty(value = "字段属性（1.文本；2.日期；3.整数；4.小数；5.是否）", hidden = true)
    private String shuxing;
    @ApiModelProperty(value = "数据类型", hidden = true)
    private String definedCtype;
    @ApiModelProperty(value = "小数位数", hidden = true)
    private String numWeishu;
    @ApiModelProperty(value = "数据范围(1.通用,0.模块)", hidden = true)
    private String scope;
    @ApiModelProperty(value = "模块(ZW总账,FA固定资产,STOCK存货)", hidden = true)
    private String model;

}
