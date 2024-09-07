"use client";

import useFetch from "@/hooks/useFetch";
import { updateTemplate } from "@/utils/string";
import { useMemo } from "react";

const data = [
  {
    name: "EB-5 immigratn investor program",
    summary:
      "The EB-5 Immigrant Investor Program is a U.S. immigration program designed to attract foreign investment in exchange for U.S. permanent residency (a green card).",
  },
  {
    name: "Tech investors",
    summary:
      "We connected with over {{investor_number}} global investors focusing on tech",
    url: "/business/investors",
  },
  {
    name: "Business operation support",
    summary: `Our business services offer comprehensive support for your company’s growth and success:

- **Company Registration:** **$800 ~ $1,500**, depending on the complexity and state requirements.
  
- **Tax Consultation:** **$500 to $5,000** based on the size and nature of your business.
  
- **Office Rental Support:** from **$100 to $5,000 per month**, depending on location and office specifications.

We tailor each service to fit your specific needs and budget, ensuring a smooth and successful setup for your business.`,
  },
];

export default function useBusinessData() {
  const {
    data: investorsRsp,
    ifLoading,
    error,
  } = useFetch({ url: "/api/investors" });
  const investors = useMemo(() => investorsRsp?.data, [investorsRsp]);

  const customizedData = useMemo(() => {
    if (investors) {
      const investorRow = data.find((item) => item.name === "Tech investors");
      investorRow.summary = updateTemplate(investorRow.summary, {
        investor_number: investors.length,
      });
    }
    return data;
  }, [investors]);

  return { data: customizedData };
}
