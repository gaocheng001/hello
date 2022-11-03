package org.boozsoft.domain.vo.stock;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.Accessors;
import org.boozsoft.domain.entity.stock.StockSaleousings;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * @Description  盘点单明细
 * @Author  lz 
 * @Date 2022-04-09
 */

@Data
@Accessors(chain = true)
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value="盘点单明细",description="盘点单明细")
public class StockSaleousingsUseVo extends StockSaleousings implements Serializable {

	@ApiModelProperty(value = "盘点仓库")
	private String cname;
	@ApiModelProperty(value = "盘点部门")
	private String dname;
	@ApiModelProperty(value = "盘点人")
	private String puname;
	@ApiModelProperty(value = "库管员")
	private String kuname;
	@ApiModelProperty(value = "审核人")
	private String buname;

	@ApiModelProperty(value = "供应商名称")
	private String custName;
	@ApiModelProperty(value = "存货名称")
	private String stockName;
	@ApiModelProperty(value = "规格型号")
	private String stockGgxh;
	@ApiModelProperty(value = "制单人")
	private String cmakerName;
	@ApiModelProperty(value = "制单人")
	private String ckName;
	@ApiModelProperty(value = "计量单位名称")
	private String unitName;

}
