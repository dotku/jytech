"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import PricingDemoProjectCards from "../../components/Cards/PricingDemoProjectCards";

export default function PricingPage() {
  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "price",
      label: "Price",
    },
  ];

  const rows = [
    {
      key: 1,
      name: "Website",
      price: "$500+",
    },
    {
      key: 2,
      name: "SEO",
      price: "$300+",
    },
    {
      key: 3,
      name: "Facebook Advertizing",
      price: "$100+",
    },
  ];

  return (
    <>
      <h2 className="text-xl py-5">Pricing</h2>
      <Table aria-label="Service Pricing Table" className="max-w-96">
        <TableHeader>
          {columns.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.key}>
              {(columnKey) => <TableCell>{row[columnKey]}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PricingDemoProjectCards />
    </>
  );
}
