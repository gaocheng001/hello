package org.boozsoft.service;

import org.boozsoft.domain.entity.Customer;
import org.boozsoft.domain.entity.group.GroupCustomer;
import org.boozsoft.domain.vo.CustomerVo;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface GroupCustomerService {
    Flux<CustomerVo> findAll();
    Mono sys_save(GroupCustomer sysCustomer);
    Mono database_save(Customer customerMono);
    // 系统日志表，以后可能会传写参
    Mono syslog_save(String text);
    // 档案分配表
    Mono sysDistRecord_save(String databaseUniqueCode,String recordUniqueCode,String recordType);
    // 审批通过-账套表中增加
    Mono approveOkSave_database(GroupCustomer customer);
    // 修改状态：开启 自动分配（集团/已经下发过的账套 全更新）
    Mono updateIsAutoSaveApi(String accId,String uniqueCode,GroupCustomer customerMono);
    // 系统通知信息表
    Mono sysnotice_save();
    Mono delFindById(String id);
    Mono findBySuccessStateAndUniqueCode(String state,String unique);
}
