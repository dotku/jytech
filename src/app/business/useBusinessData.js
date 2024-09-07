"use client";

import useFetch from "@/hooks/useFetch";
import { updateTemplate } from "@/utils/string";
import { useMemo } from "react";

const data = [
  {
    name: "EB-5 immigratn investor program",
    summary:
      "The EB-5 Immigrant Investor Program is a U.S. immigration initiative aimed at fostering economic growth by attracting foreign investment. In exchange for meeting specific investment thresholds, typically in targeted employment areas, qualified **investors and their immediate family members** are eligible to obtain U.S. permanent residency **(green card)**. This program not only supports U.S. job creation but also offers a streamlined pathway for investors to establish roots in the United States.",
    url: "/business/eb-5",
  },
  {
    name: "Tech investors",
    summary:
      "We’ve successfully established connections with over **{{investor_number}} global investors**, all with a shared focus on technology-driven ventures. Our expansive network spans various industries and geographies, reinforcing our commitment to fostering innovation. By actively engaging with this diverse group of stakeholders, we’ve built a strong foundation for collaboration, enabling us to stay at the forefront of emerging tech trends and investment opportunities in the global market.",
    url: "/business/investors",
  },
  {
    name: "Business operation support",
    summary: `Our business services offer comprehensive support for your company’s growth and success:

- **Company Registration:** depending on the complexity and state requirements, **$800 ~ $1,500**.
  
- **Tax Consultation:** based on the size and nature of your business, **$500 ~ $5,000**.
  
- **Office Rental Support:** depending on location and office specifications, **$100 ~ $5,000 per month**.

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
