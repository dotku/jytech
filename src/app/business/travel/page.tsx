import { ReactMarkdownWrapper } from "@/components/Cards/PricingServicePlanCards";
import ReactMarkdown from "react-markdown";

export default function Travel() {
  return (
    <>
      <section className="mb-3">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">
          Travel
        </h2>
        <p>
          Do you need airport pickup? We can help! Contact WeChat:{" "}
          <a href="https://wa.me/16503027093">Micheal Feng</a>
        </p>
      </section>
      <ReactMarkdownWrapper>
        <ReactMarkdown>{`
# 兼职司机招募邀请函

亲爱的驾驶员朋友：

为了满足日益增长的运输需求，我们公司现诚挚邀请有责任心、具备驾驶技能的兼职司机加入我们的团队。无论您是希望利用空闲时间增加收入，还是希望积累更多驾驶经验，我们都为您提供了一个灵活而有竞争力的平台。

**岗位要求：**
1. 拥有有效的驾驶执照（C1及以上）。
2. 身体健康，年龄在 22-55 岁之间。
3. 无重大交通事故记录，遵守交通规则。
4. 能够适应弹性工作时间，包括周末和节假日。

**岗位职责：**
- 根据公司要求按时完成客运任务。
- 确保运输过程中客人安全并按指定路线行驶。
- 保持车辆清洁和良好状态，确保安全驾驶。

**我们为您提供：**
- 灵活的工作时间，您可以根据自身的空闲时间自由安排。
- 具有竞争力的薪酬结构，多劳多得。
- 专业的司机培训，提升您的驾驶技能和服务水平。

如果您对我们的兼职司机岗位感兴趣，请通过以下方式联系我们：
- 联系人：Micheal
- 联系电话：XXX-XXXX-XXXX
- 邮箱：XXX@company.com

期待您的加入，让我们一起为客户提供高效优质的运输服务！

**麦克 Limo**

日期：2024 年 9 月 29 日`}</ReactMarkdown>
      </ReactMarkdownWrapper>
    </>
  );
}
