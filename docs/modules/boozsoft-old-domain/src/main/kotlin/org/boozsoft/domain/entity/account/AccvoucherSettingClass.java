package org.boozsoft.domain.entity.account;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@ApiModel(value = "档案名：常用凭证分类", description = "常用凭证分类")
@Table("accvoucher_setting_class")
@Data
public class AccvoucherSettingClass {

    @Id
    @ApiModelProperty(value = "主键", hidden = true)
    @CreatedBy
    @JsonSerialize(using = ToStringSerializer.class)
    private String id;
    @ApiModelProperty(value = "分类编码", hidden = true)
    private String classCode;
    @ApiModelProperty(value = "分类名称", hidden = true)
    private String className;

}
