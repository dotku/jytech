import {
  Card,
  Listbox,
  ListboxItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

const projectDataRows = [
  {
    key: 4,
    name: "ZYIntl",
    description:
      "a online ecommerce business platform for Personal Protective Equipment (PPE) business, convers gloves, masks and test kits",
    cost: "$80,000",
  },
  {
    key: 3,
    name: "Qi Xing Au Pair Facebook Marketing",
    description: "generated leads 100+/mo",
    cost: "$6,000",
  },
  {
    key: 2,
    name: "Next Appointment App",
    description: "an appointment platform covers mobile apps",
    url: "https://next-appointment-app-one.vercel.app/",
    cost: "$30,000",
  },
  {
    key: 1,
    name: "AlumAI Advisor",
    description: "an international advisor program",
    url: "https://alumadvisors.com/",
    cost: "$100,000",
  },
];

const headers = [
  { key: "name", label: "Name" },
  { key: "description", label: "Description" },
  { key: "cost", label: "Cost" },
];

export default function PricingDemoProjects() {
  return (
    <>
      <h3 className="text-xl">Demo Projects</h3>
      <Table aria-label="Service Pricing Table">
        <TableHeader>
          {headers.map((column) => (
            <TableColumn key={column.key}>{column.label}</TableColumn>
          ))}
        </TableHeader>
        <TableBody>
          {projectDataRows.map((row) => (
            <TableRow key={row.key}>
              {(columnKey) => <TableCell>{row[columnKey]}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
