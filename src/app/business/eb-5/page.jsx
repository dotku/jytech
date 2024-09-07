"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
import Footer from "./components/Footer";
import styled from "styled-components";

const StyledCard = styled(Card)`
  p {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
`;

export default function EB5() {
  return (
    <>
      <StyledCard className="max-w-5xl p-7 mx-auto">
        <CardHeader className="flex-col sm:flex-row ">
          <Button
            as={Link}
            href="tel:5103783479"
            isIconOnly
            size="lg"
            className="h-24 w-24 sm:h-12 sm:w-12 mr-3 rounded-full"
          >
            <Image
              alt="avatar of jessica meng"
              size="lg"
              name="Jesscia Meng"
              src="/assets/images/profiles/jessica-meng.png"
            />
          </Button>
          <h2 className="text-3xl">
            Fast and Convenient Green Card Application: EB-5 Investor Visa
          </h2>
        </CardHeader>
        <CardBody>
          <Image
            src="/assets/images/business/eb-5-process-workflow-copyrights.png"
            className="rounded mb-3"
            alt="jessica meng eb-5 process workflow flyer"
          />
          <p>
            The EB-5 Immigrant Investor Program is a U.S. immigration program
            designed to attract foreign investment in exchange for U.S.
            permanent residency (a green card). Here&apos;s how it works:
          </p>
          <p>
            <span className="font-semibold">Investment Requirement:</span>
            Investors must make a significant financial investment in a U.S.
            business. The standard minimum investment is $1,050,000, but it can
            be reduced to $800,000 if the investment is in a Targeted Employment
            Area (TEA), which includes rural areas or areas with high
            unemployment.
          </p>
          <p>
            <span className="font-semibold">Job Creation:</span> The investment
            must create or preserve at least 10 full-time jobs for U.S. workers
            within two years of the investor&apos;s admission to the U.S.
          </p>
          <p>
            <span className="font-semibold">Green Card:</span> In return for
            their investment, the investor and their immediate family (spouse
            and unmarried children under 21) can apply for U.S. permanent
            residency.
          </p>
          <p>
            <span className="font-semibold">Regional Centers:</span> Investors
            often choose to invest through EB-5 Regional Centers, which are
            government-approved entities that pool investments for larger
            projects. These centers help manage the job creation and economic
            requirements of the EB-5 program.
          </p>
          <p>
            The program is especially popular for foreign nationals looking for
            a path to U.S. residency through economic contribution.
          </p>
          <p className="w-full font-bold">
            Want to learn more about the steps on process the EB-5?
          </p>
          <div>
            <Button
              variant="bordered"
              color="primary"
              as={Link}
              href="tel:5103783479"
            >
              Contact Lawyer Meng
            </Button>
            <Button
              href="https://chatgpt.com/g/g-RyuivvSV7-law-office-of-jessica-y-meng"
              as={Link}
              isExternal
              showAnchorIcon
              variant="bordered"
              className="sm:ml-1 mt-1 sm:mt-0"
              color="primary"
            >
              try Laywer Meng GPT
            </Button>
          </div>
        </CardBody>
        <CardFooter className="flex-col text-base">
          <Footer />
        </CardFooter>
      </StyledCard>
    </>
  );
}
