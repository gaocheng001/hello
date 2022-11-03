package org.boozsoft.rest.group;

import com.alibaba.fastjson.JSON;
import org.boozsoft.domain.entity.group.GroupCustomerClassAccount;
import org.boozsoft.repo.group.GroupCustomerClassAccountRepository;
import org.springbooz.core.tool.result.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * 集团客户分类分配表
 */
@RestController
@RequestMapping("/sys/customerClassAssign")
public class GroupCustomerClassAssignAccountController {

    @Autowired
    GroupCustomerClassAccountRepository groupCustomerClassAccountRepository;

    @PostMapping("findByOrgAssigAccountCtype")
    public Mono findByOrgAssigAccountCtype(String ctype) {
        return groupCustomerClassAccountRepository.findAllByCtype(ctype).collectList().map(o -> R.ok().setResult(o));
    }

    /**
     * 按组织查询已分配记录
     * @return
     */
    @PostMapping("findByOrgAssigAccount")
    public Mono findByOrgAssigAccount(String orgUnique,String ctype) {
        return groupCustomerClassAccountRepository.findAllByOrgUniqueAndCtype(orgUnique,ctype).collectList().map(o -> R.ok().setResult(o));
    }
    @PostMapping("findByOrgAssigTenantId")
    public Mono findByOrgAssigTenantId(String orgUnique,String ctype,String tenantId) {
        return groupCustomerClassAccountRepository.findAllByOrgUniqueAndCtypeAndTenantId(orgUnique,ctype,tenantId).collectList().map(o -> R.ok().setResult(o));
    }

    /**
     * 先清空 组织未分配给账套的账套的数据
     * 再添加
     * @return
     */
    @PostMapping("save")
    public Mono save(@RequestBody Map map) {
        List<GroupCustomerClassAccount> object= JSON.parseArray(map.get("list").toString(), GroupCustomerClassAccount.class);
        List<GroupCustomerClassAccount> collect = object.stream().distinct().collect(Collectors.toList());
        return groupCustomerClassAccountRepository.saveAll(collect).collectList().map(o -> R.ok().setResult(o));
    }

    /**
     * 取消组织分配
     * @param map
     * @return
     */
    @PostMapping("delByCtypeAndOrgUnique")
    public Mono delByCtypeAndOrgUnique(@RequestBody Map map) {
        String orgUnique=map.get("orgUnique").toString();
        List<String> orgDelList= (List<String>) map.get("orgDelList");
        return groupCustomerClassAccountRepository.delByCtypeAndOrgUnique("1",orgUnique,orgDelList)
                .then(Mono.just(R.ok()));
    }
    /**
     * 取消账套分配
     * @param map
     * @return
     */
    @PostMapping("delByCtypeAndOrgUniqueAndTenantId")
    public Mono delByCtypeAndOrgUniqueAndTenantId(@RequestBody Map map) {
        String orgUnique=map.get("orgUnique").toString();
        String tenantId=map.get("tenantId").toString();
        List<String> orgDelList= (List<String>) map.get("orgDelList");
        return groupCustomerClassAccountRepository.delByCtypeAndOrgUniqueAndTenantId("2",orgUnique,orgDelList,tenantId)
                .then(Mono.just(R.ok()));
    }

    @PostMapping("findByRepeat")
    public Mono findByRepeat(String orgUnique,String ctype) {
        return groupCustomerClassAccountRepository.findByRepeat(ctype,orgUnique).collectList().map(o -> R.ok().setResult(o));
    }

    /**
     * 删除分配给组织的数据：组织未分配给账套的数据进行删除
     * @param orgUnique
     * @param ctype
     * @param flag
     * @return
     */
    @PostMapping("delByCtypeAndOrgUniqueAndFlag")
    public Mono delByCtypeAndOrgUniqueAndFlag(String orgUnique,String ctype,String flag) {
        return groupCustomerClassAccountRepository.delByCtypeAndOrgUniqueAndFlag(ctype,orgUnique,flag).then(Mono.just(R.ok()));
    }

    @PostMapping("delByCtypeAndOrgUniqueAndFlagAndTenantId")
    public Mono delByCtypeAndOrgUniqueAndFlag(String orgUnique,String ctype,String flag,String tenantId) {
        return groupCustomerClassAccountRepository.delByCtypeAndOrgUniqueAndFlagAndTenantId(ctype,orgUnique,flag,tenantId).then(Mono.just(R.ok()));
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
        return groupCustomerClassAccountRepository.editFlagByCtypeAndOrgUnique(flag,ctype,orgUnique,list).then(Mono.just(R.ok()));
    }

    @PostMapping("editFlagByCtypeAndTenantId")
    public Mono editFlagByCtypeAndTenantId(@RequestBody Map map) {
        String flag=map.get("flag").toString();
        String ctype=map.get("ctype").toString();
        String tenantId=map.get("tenantId").toString();
        List<String> list= (List<String>) map.get("list");
        return groupCustomerClassAccountRepository.editFlagByCtypeAndTenantId(flag,ctype,tenantId,list).then(Mono.just(R.ok()));
    }
}
