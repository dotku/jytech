"use client";

import { ReactMarkdownWrapper } from "@/components/Cards/PricingServicePlanCards";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Input,
  Textarea,
  ModalFooter,
  ModalHeader,
  ModalBody,
  ModalContent,
  Modal,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ChineseJobMarket() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [postTypeColor, setPostTypeColor] = useState("default");
  const [isNameUpdateOpen, setIsNameUpdateOpen] = useState(false);
  const [username, setUsername] = useState("匿名者");

  const handleJobFindClick = () => {
    setPostTypeColor("success");
  };

  const handleTalentFindClick = () => {
    setPostTypeColor("secondary");
  };

  const handlePostOnlyClick = () => {
    setPostTypeColor("default");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-3 mx-auto">
      <section className="col-span-1 gap-3 flex-start text-center">
        <p className="text-left mb-6">
          由于语言以及文化隔阂，第一代华人在美国的发展可能会遇到诸多的挑战。本平台面向华人，专门为新移民提供服务，帮助您更快适应海外生活。
        </p>
        <Link className="inline-block w-80 mt-1 mx-auto">
          <Button
            className="w-full bg-black text-white"
            onClick={handleTalentFindClick}
          >
            我是雇主，我要发布招募信息
          </Button>
        </Link>
        <Link className="inline-block w-80 mt-1 mx-auto">
          <Button
            className="w-full bg-black text-white"
            onClick={handleJobFindClick}
          >
            我要找工作
          </Button>
        </Link>
        <Link className="inline-block w-80  mt-1 mx-auto">
          <Button
            className="w-full bg-black text-white"
            onClick={handlePostOnlyClick}
          >
            我只是想发布信息
          </Button>
        </Link>
        <Link
          className="inline-block w-80 mt-1 mx-auto"
          href="/business/opportunities"
        >
          <Button className="w-full bg-black text-white">我要找创业机会</Button>
        </Link>
      </section>
      <section className="col-span-2">
        <div className="grid gap-3">
          <Card>
            <CardHeader className="justify-between">
              <div className="flex items-center">
                <Button
                  className="mr-1"
                  auto
                  style={{
                    borderRadius: "50%", // Keep the button circular
                    padding: 0, // Remove padding to avoid shape change
                    minWidth: "auto", // Ensure the button doesn't stretch
                    alignItems: "center",
                  }}
                  onClick={onOpen}
                >
                  <Avatar
                    name={username.substring(0, 1) || "匿"}
                    className="w-10"
                    color={postTypeColor}
                  />
                </Button>
                <Button variant="bordered" onClick={onOpen} className="px-0">
                  <span onPress={onOpen}>{username}</span>
                </Button>
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                  <ModalContent>
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          修改名字
                        </ModalHeader>
                        <ModalBody>
                          <Input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                          />
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            取消
                          </Button>
                          <Button color="primary" onPress={onClose}>
                            确认
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>
              </div>
            </CardHeader>
            <CardBody>
              <Textarea label="comment" />
            </CardBody>
            <CardFooter className="justify-end">
              <Button>发布</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="justify-between">
              <div className="flex items-center">
                <Avatar name="艾" className="mr-1" color="success" />
                <span>艾米丽</span>
              </div>
              <div>1 分钟前</div>
            </CardHeader>
            <CardBody>
              <ReactMarkdownWrapper>
                <ReactMarkdown>{`🌟 **寻求新的职业机会！** 🌟

大家好！我目前正在寻找[行业或职位类型]领域的全新机会，期待加入一家有活力、有创新精神的公司。

我拥有[年数]年的[相关领域或职位]经验，特别擅长[具体技能或技术]，并且有幸参与了[项目或成就]，这些经历使我在[行业或领域]中积累了丰富的知识和实战经验。

如果你或你的公司正在寻找[职位名称]，并且认为我可能适合，请随时与我联系。我非常期待与行业内的优秀团队合作，共同实现新的目标！

感谢大家的支持和帮助！ 🙌

📧 可以通过[联系方式]与我取得联系  
🔗 [LinkedIn个人主页链接]

#求职 #招聘 #职业发展 #开放机会 #新机会 #职业成长
`}</ReactMarkdown>
              </ReactMarkdownWrapper>
            </CardBody>
            <CardFooter>
              <Input label="comment" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="justify-between">
              <div className="flex items-center">
                <Avatar name="蒋" className="mr-1" color="secondary" />
                <span>蒋大伟</span>
              </div>
              <div>30 分钟前</div>
            </CardHeader>
            <CardBody>
              <ReactMarkdownWrapper>
                <ReactMarkdown>{`🚀 **我们正在招聘！** 🚀

**公司名称** 正在寻找一名有才华的 **[职位名称]** 加入我们的团队！如果你对[行业/技术领域]充满热情，且拥有相关经验，那么我们非常希望与你见面！

🔹 **职位名称**：  
🔹 **工作地点**：[远程/办公地点]  
🔹 **工作类型**：全职/兼职/合同工  
🔹 **主要职责**：  
- [职责1]  
- [职责2]  
- [职责3]

🔹 **职位要求**：  
- [技能或经验要求1]  
- [技能或经验要求2]  
- [技能或经验要求3]

🔹 **加分项**：  
- [加分技能1]  
- [加分技能2]

💼 **我们提供**：  
- 有竞争力的薪酬  
- [福利1]  
- [福利2]  
- 友好且富有创新精神的工作环境

📧 有兴趣的候选人请将简历发送至：[联系人邮箱] 或直接通过LinkedIn与我们联系。我们期待你的加入，帮助我们一起创造更多的成功！

#招聘 #工作机会 #职位空缺 #加入我们 #职业发展
`}</ReactMarkdown>
              </ReactMarkdownWrapper>
            </CardBody>
            <CardFooter>
              <Input label="comment" />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader className="justify-between">
              <div className="flex items-center">
                <Avatar name="王" className="mr-1" /> 王建硕
              </div>
              <div>1 天前</div>
            </CardHeader>
            <CardBody>
              <ReactMarkdownWrapper>
                <ReactMarkdown>{`我只是过来冒泡的...`}</ReactMarkdown>
              </ReactMarkdownWrapper>
            </CardBody>
            <CardFooter>
              <Input label="comment" />
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
