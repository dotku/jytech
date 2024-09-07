"use client";

import {
  Avatar,
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
    margin-bottom: 8px;
  }
`;

export default function EB5() {
  return (
    <>
      <StyledCard className="max-w-3xl p-7 mx-auto">
        <CardHeader className="text-2xl">
          <Button
            href="tel:(510)378-3479"
            isIconOnly
            className="mr-3 rounded-full"
          >
            <Image
              alt="avatar of jessica meng"
              size="lg"
              name="Jesscia Meng"
              src="/assets/images/profiles/jessica-meng.png"
            />
          </Button>
          Fast and Convenient Green Card Application: EB-5 Investor Visa
        </CardHeader>
        <CardBody>
          <p>
            The EB-5 Immigrant Investor Program is a U.S. immigration program
            designed to attract foreign investment in exchange for U.S.
            permanent residency (a green card). Here&apos;s how it works:
          </p>
          <p>
            Investment Requirement: Investors must make a significant financial
            investment in a U.S. business. The standard minimum investment is
            $1,050,000, but it can be reduced to $800,000 if the investment is
            in a Targeted Employment Area (TEA), which includes rural areas or
            areas with high unemployment.
          </p>
          <p>
            Job Creation: The investment must create or preserve at least 10
            full-time jobs for U.S. workers within two years of the
            investor&apos;s admission to the U.S.
          </p>
          <p>
            Green Card: In return for their investment, the investor and their
            immediate family (spouse and unmarried children under 21) can apply
            for U.S. permanent residency.
          </p>
          <p>
            Regional Centers: Investors often choose to invest through EB-5
            Regional Centers, which are government-approved entities that pool
            investments for larger projects. These centers help manage the job
            creation and economic requirements of the EB-5 program.
          </p>
          <p>
            The program is especially popular for foreign nationals looking for
            a path to U.S. residency through economic contribution.
          </p>
          <p className="w-full font-bold">
            Want to learn more about the steps on process the EB-5?
          </p>
          <div>
            <Button variant="bordered" color="primary" href="tel:(510)378-3479">
              Contact Lawyer Meng
            </Button>
            <Button
              href="https://chatgpt.com/g/g-RyuivvSV7-law-office-of-jessica-y-meng"
              as={Link}
              isExternal
              showAnchorIcon
              variant="bordered"
              className="ml-1"
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
