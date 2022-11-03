package org.boozsoft.rest.group;

import org.boozsoft.domain.entity.group.GroupSupplierAccount;
import org.boozsoft.repo.group.GroupSupplierAccountRepository;
import org.springbooz.core.tool.result.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

/**
 * 集团供应商信息分配表
 */
@RestController
@RequestMapping("/sys/supplierAssign")
public class GroupSupplierAssignAccountController {

    @Autowired
    GroupSupplierAccountRepository groupSupplierAccountRepository;



    @PostMapping("findByOrgAssigAccountCtype")
    public Mono findByOrgAssigAccountCtype(String ctype) {
        return groupSupplierAccountRepository.findAllByCtype(ctype).collectList().map(o -> R.ok().setResult(o));
    }

    /**
     * 按组织查询已分配记录
     * @return
     */
    @PostMapping("findByOrgAssigAccount")
    public Mono findByOrgAssigAccount(String orgUnique,String ctype) {
        return groupSupplierAccountRepository.findAllByOrgUniqueAndCtype(orgUnique,ctype).collectList().map(o -> R.ok().setResult(o));
    }

    @PostMapping("groupCusAssignOrgSave")
    public Mono groupCusAssignOrgSave(@RequestBody List<GroupSupplierAccount> list) {
        return groupSupplierAccountRepository.saveAll(list).collectList().map(o -> R.ok().setResult(o));
    }

    @PostMapping("groupCusAssignDelById")
    public Mono groupCusAssignDelById(String orgUnique,String ctype,String dataUnique) {
        List<String> list = Arrays.asList(dataUnique.split(","));
        return groupSupplierAccountRepository.deleteAllById(orgUnique,ctype,list).then(Mono.just(R.ok()));
    }
    @PostMapping("groupCusAssignDelByIdAndTenantId")
    public Mono groupCusAssignDelByIdAndTenantId(String orgUnique,String ctype,String tenantId,String dataUnique) {
        List<String> list = Arrays.asList(dataUnique.split(","));
        return groupSupplierAccountRepository.deleteAllByIdAndTenantId(orgUnique,ctype,tenantId,list).then(Mono.just(R.ok()));
    }

    @PostMapping("findAllByOrgUniqueAndCtypeAndFlag")
    public Mono findAllByOrgUniqueAndCtypeAndFlag(@RequestBody Map map) {
        String orgUnique=map.get("orgUnique").toString();
        String ctype=map.get("ctype").toString();
        String flag=map.get("flag").toString();
        return groupSupplierAccountRepository.findAllByOrgUniqueAndCtypeAndFlag(orgUnique,ctype,flag).collectList().map(o -> R.ok().setResult(o));
    }

    @PostMapping("findAllByOrgUniqueAndTenantIdAndCtypeAndFlag")
    public Mono findAllByOrgUniqueAndTenantIdAndCtypeAndFlag(@RequestBody Map map) {
        String orgUnique=map.get("orgUnique").toString();
        String tenantId=map.get("tenantId").toString();
        String ctype=map.get("ctype").toString();
        String flag=map.get("flag").toString();
        return groupSupplierAccountRepository.findAllByOrgUniqueAndTenantIdAndCtypeAndFlag(orgUnique,tenantId,ctype,flag).collectList().map(o -> R.ok().setResult(o));
    }

    /**
     * 批量修改引入状态
     * @param map
     * @return
     */
    @PostMapping("editFlagByCtypeAndOrgUnique")
    public Mono editFlagByCtypeAndOrgUnique(@RequestBody Map map) {
        String flag=map.get("flag").toString();
        String ctype=map.get("ctype").toString();
        String orgUnique=map.get("orgUnique").toString();
        List<String> list= (List<String>) map.get("list");
        return groupSupplierAccountRepository.editFlagByCtypeAndOrgUnique(flag,ctype,orgUnique,list).then(Mono.just(R.ok()));
    }
    @PostMapping("editFlagByCtypeAndOrgUniqueAndTenantId")
    public Mono editFlagByCtypeAndOrgUniqueAndTenantId(@RequestBody Map map) {
        String flag=map.get("flag").toString();
        String ctype=map.get("ctype").toString();
        String orgUnique=map.get("orgUnique").toString();
        String tenantId=map.get("tenantId").toString();
        List<String> list= (List<String>) map.get("list");
        return groupSupplierAccountRepository.editFlagByCtypeAndOrgUniqueAndTenantId(flag,ctype,orgUnique,tenantId,list).then(Mono.just(R.ok()));
    }

    /**
     * 判断组织申请客户简称是否在分配表中
     * @return
     */
    @PostMapping("findByOrgCusAbbNameAssignAccount")
    public Mono<R> findByOrgCusAbbNameAssignAccount(String ctype,String flag,String abbName,String orgUnique){
        return groupSupplierAccountRepository.findByOrgCusAbbNameAssignAccount(ctype,flag,abbName,orgUnique).map(a->R.ok().setResult(a));
    }
    /**
     * 判断组织申请客户全称是否在分配表中
     * @return
     */
    @PostMapping("findByOrgCusNameAssignAccount")
    public Mono<R> findByOrgCusNameAssignAccount(String ctype,String flag,String name,String orgUnique){
        return groupSupplierAccountRepository.findByOrgCusNameAssignAccount(ctype,flag,name,orgUnique).map(a->R.ok().setResult(a));
    }

    @PostMapping("findByOrgCusAbbNameAndCustNameAssignAccount")
    public Mono<R> findByOrgCusAbbNameAndCustNameAssignAccount(String ctype,String flag,String abbName,String custName,String orgUnique){
        return groupSupplierAccountRepository.findByOrgCusAbbNameAndCustNameAssignAccount(ctype,flag,abbName,custName,orgUnique).map(a->R.ok().setResult(a));
    }

    @PostMapping("findByTenantIdCusAbbNameAndCustNameAssignAccount")
    public Mono<R> findByTenantIdCusAbbNameAndCustNameAssignAccount(String ctype,String flag,String abbName,String custName,String tenantId){
        return groupSupplierAccountRepository.findByTenantIdCusAbbNameAndCustNameAssignAccount(ctype,flag,abbName,custName,tenantId).map(a->R.ok().setResult(a));
    }

    @PostMapping("findAllByCusAssignLeftJoinGroupCusDataAndTenantId")
    public Mono findAllByCusAssignLeftJoinGroupCusDataAndTenantId(String orgUnique, String ctype,String tenantId) {
        return groupSupplierAccountRepository.findAllByCusAssignLeftJoinGroupCusDataAndTenantId(orgUnique,ctype,tenantId).collectList().map(o -> R.ok().setResult(o));
    }
}
