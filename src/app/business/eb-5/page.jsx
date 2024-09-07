import { Card, CardBody } from "@nextui-org/react";
import Footer from "./components/Footer";

export default function EB5() {
  return (
    <>
      <Card className="max-w-7xl p-7">
        <CardBody>
          <p>
            The EB-5 Immigrant Investor Program is a U.S. immigration program
            designed to attract foreign investment in exchange for U.S.
            permanent residency (a green card). Here's how it works:
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
            full-time jobs for U.S. workers within two years of the investor's
            admission to the U.S.
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
        </CardBody>
      </Card>
      <Footer />
    </>
  );
}
