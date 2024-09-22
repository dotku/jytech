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
      <h2 className="text-2xl font-bold">Dory Power 销售手册</h2>
      <section>
        <h3 className="text-xl my-3 font-semibold">VIP 客户计划</h3>
        <p>
          VIP
          客户计划针对的是那些认同咱们产品，但不想成为经销商，经济承受能力也有限的目标客户群体。
          推荐 10 个名单只是个流程和形式，VIP 客户可以以 1
          折得到产品，不走报销的方法，直接返还现金礼卡，但是不返税费和运费。
          经销商获得折扣之后相应的销售佣金。
        </p>
        <p>VIP 客户销售佣金：</p>
        <ul className="my-3">
          <li>Sentry Plus（原价$3999）: $300 /台</li>
          <li>Sentry Pro （原价$4999）：$400/台</li>
          <li>Sentry Pro Max（原价$7999）：$500/台</li>
        </ul>
        <h4 className="text-lg my-3">VIP客户购买流程 </h4>
        <ul className="list-decimal list-inside">
          <li>填写订购单</li>
          <li>支付30%定金 </li>
          <li>交付前补交全款</li>
          <li>发货</li>
          <li>转介绍目标客户名单，公司提供购买商品价格60%的现金礼卡作为感谢</li>
          <li>由销售说明退税流程，收到政府30%退税</li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl my-3 font-semibold">经销商计划</h3>
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
        <p>产品售价指南及销售佣金：</p>
        <ul className="my-3">
          <li> 订单小于 10 台，全款, 销售价格 x 40% = 佣金</li>
          <li>
            订单 10~19 台，销售价格 9 折(10% off), 总销售价格 x 36% = 佣金
          </li>
          <li>
            订单 20~49 台，销售价格 8.5 折(15% off), 总销售价格 x 34% = 佣金
          </li>
          <li>
            订单 50~99 台，销售价格 8 折(20% off), 总销售价格 x 32% = 佣金
          </li>
          <li>
            订单 100~149 台，销售价格 7.5 折(25% off), 总销售价格 x 30% = 佣金
          </li>
          <li>
            订单 150~499 台，销售价格 7 折(30% off), 总销售价格 x 28% = 佣金
          </li>
          <li> 订单 500 台以上，具体商定</li>
        </ul>
      </section>
      <section>
        <h3 className="text-xl my-3 font-semibold">渠道开发管理佣金</h3>
        <h4 className="text-lg my-3">资格</h4>
        <ol>
          <li>
            1、完成销售 2 件产品（Sentry Plus, Sentry Pro, Sentry Pro
            Max）及以上的业绩的销 售代表，可升职为高级销售代表(Senior Sales
            Representative), 可签约和领导其他销售 代表。
          </li>
          <li>2、签约成功且协助其领导的销售代表产生业绩即可收获管理佣金。</li>
        </ol>
        <h4 className="text-lg my-3">管理佣金</h4>
        下级销售代表所产生的直接销售数量 x $150/台 = 管理佣金。
      </section>
      <section>
        <h3 className="text-xl my-3 font-semibold">渠道管理职责</h3>
        <p>
          高级销售代表作为上级渠道管理者需对下级销售代表进行培训、组织其按
          时参加公司培训课。保证传授销售代表知识与经验，协助完成下级渠道完成订单流程，及
          时向公司汇报下级销售代表的业务情况。
        </p>
        <h3 className="text-xl my-3 font-semibold">关于申请脱离上下级条件</h3>
        <p>
          下级销售代表以事实投诉上级高级销售代表不对其进行培训或相关基础支持，或存在其它
          不遵守公司规章制度的行为。经公司调查，如内容属实将对上级高级销售代表先予以一次
          警告，如继续遭到投诉将取消上级高级销售代表的管理资格。
        </p>
        <h3 className="text-xl my-3 font-semibold">特别责任声明</h3>
        <ul className="my-3">
          <li>
            1、保密条款：禁止在社交媒体及公共宣传平台公开公司线下渠道推广及费用信息。
          </li>
          <li>
            2、禁止以不正当手段扰乱市场秩序、阻碍公司市场活动、影响公司社会形象。
          </li>
          <li>
            3、尊重公司同事，遵守纪律。任何销售代表在市场活动中不得以欺骗客户或污蔑名誉等
            个人攻击的方式进行恶意竞争，如遭客户或其他销售代表投诉举报，经公司调查属实，公
            司将予以对其警告或取消销售代表资格，如情节严重，公司将追究法律责任。
          </li>
          <li>
            4、销售代表应及时、如实反馈市场及客户紧急情况及意见，保证订单完成任务。
          </li>
        </ul>
      </section>
    </div>
  );
}
