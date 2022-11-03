package org.boozsoft.domain.entity.account;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@ApiModel(value = "数据表：财务收据表体回滚表", description = "财务收据表体回滚表")
@Table("receipt_rollback")
@Data
public class ReceiptRollback {

    @Id
    @ApiModelProperty(value = "ID", hidden = true)
    @CreatedBy
    @JsonSerialize(using = ToStringSerializer.class)
    private String id;
    @ApiModelProperty(value = "收据表头唯一编码", hidden = true)
    @JsonSerialize(using = ToStringSerializer.class)
    private Long uniqueCode;
    @ApiModelProperty(value = "商品品名及规格", hidden = true)
    private String stockName;
    @ApiModelProperty(value = "数量", hidden = true)
    private String stockNum;
    @ApiModelProperty(value = "单位", hidden = true)
    private String unit;
    @ApiModelProperty(value = "单价", hidden = true)
    private String price;
    @ApiModelProperty(value = "总价", hidden = true)
    private String amount;
    @ApiModelProperty(value = "", hidden = true)
    private String beiyong1;
    @ApiModelProperty(value = "", hidden = true)
    private String beiyong2;
    @ApiModelProperty(value = "变动日期", hidden = true)
    private String biandongDate;
    @ApiModelProperty(value = "变动方式(1.修改;2.删除;3.停用)", hidden = true)
    private String biandongMethod;
    @ApiModelProperty(value = "操作员姓名", hidden = true)
    private String biandongName;
    @ApiModelProperty(value = "操作员唯一标识", hidden = true)
    private String biandongUniqueCode;
    @ApiModelProperty(value = "变动id", hidden = true)
    @JsonSerialize(using = ToStringSerializer.class)
    private String biandongId;

}
