"use client";

import { ReactMarkdownWrapper } from "@/components/Cards/PricingServicePlanCards";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import Markdown from "react-markdown";

export default function DistributorDoryPower() {
  const [password, setPassword] = useState("");

  if (password !== "abc123") {
    return (
      <div className="flex justify-center items-center h-96">
        <Input
          type="password"
          label="Password"
          placeholder="Enter your password"
          className="w-96"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          description="请联系你的销售经理获得登陆信息"
        />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl">Dory Power 销售手册</h2>
      <h3 className="text-xl my-3">经销商计划</h3>
      <p>经销商获得样品具体流程：</p>
      <ul className="my-3">
        <li>1, 签约经销商</li>
        <li>2, 填写认购单，发送至oder</li>
        <li>3, 收到定金（商品价格30%）付款通知，支票付款</li>
        <li>5, 交付前收到余额付款通知，支票付款</li>
        <li>6, 公司发货样品</li>
        <li>7, 付全款7个工作日后开始报销返款流程</li>
        <li>8, 接受退税指导培训,报税季提交退税申请，至退税完成</li>
      </ul>
      <h3 className="text-xl my-3">VIP 客户计划</h3>
      <p>
        VIP
        客户计划针对的是那些认同咱们产品，但不想成为经销商，经济承受能力也有限的目标客户群体。
        推荐 10 个名单只是个流程和形式，VIP 客户可以以 1
        折得到产品，不走报销的方法，直接返还现金礼卡，但是不返税费和运费。
        经销商获得折扣之后相应的销售佣金。
      </p>
      <h4 className="text-lg my-3">VIP客户购买流程 </h4>
      <ul className="list-decimal list-inside">
        <li>填写订购单</li>
        <li>支付30%定金 </li>
        <li>交付前补交全款</li>
        <li>发货</li>
        <li>转介绍目标客户名单，公司提供购买商品价格60%的现金礼卡作为感谢</li>
        <li>由销售说明退税流程，收到政府30%退税</li>
      </ul>
    </div>
  );
}
