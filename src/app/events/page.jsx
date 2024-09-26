import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DateInput,
  Input,
  Textarea,
  TimeInput,
} from "@nextui-org/react";

const data = [
  {
    id: "abc123",
    title: "Microsoft AI Demo 001",
    cover_image: "", // image here
    summary: "Join Microsoft AI Demo for tech learning session",
    date_time: "10/01/2024 9:00pm",
    cost: 9,
    ticket_sold: 9,
    ticket_total: 20,
  },
  {
    id: "abc456",
    title: "Microsoft AI Demo 002",
    cover_image: "", // image here
    summary: "Join Microsoft AI Demo for tech learning session",
    date_time: "10/01/2024 9:00pm",
    cost: 9,
    ticket_sold: 9,
    ticket_total: 20,
  },
  {
    id: "abc789",
    title: "Microsoft AI Demo 003",
    cover_image: "", // image here
    summary: "Join Microsoft AI Demo for tech learning session",
    date_time: "10/01/2024 9:00pm",
    cost: 9,
    ticket_sold: 9,
    ticket_total: 20,
  },
];

const Event = ({ entry, className }) => (
  <Card className={className}>
    <CardHeader>{entry.title}</CardHeader>
    <CardBody>
      <section>{entry.summary}</section>

      <section>
        <div>date_time: {entry.date_time} </div>
        <div>cost: {entry.cost}</div>
        <div>
          ticket: {entry.ticket_sold} / {entry.ticket_total}
        </div>
      </section>
    </CardBody>
    <CardFooter className="justify-end">
      <Button className="bg-black text-white">Enter</Button>
    </CardFooter>
  </Card>
);

export default function Events() {
  return (
    <>
      <div className="p-9 grid grid-cols-3 gap-3">
        <div className=" col-span-2 ">
          <Input className="mb-3" label="title" />
          <Textarea className="mb-3" label="summary" />
          <DateInput className="mb-3" label="date" />
          <TimeInput className="mb-3" label="time" />
          <Input className="mb-3" label="location" />
          <Input className="mb-3" label="event URL" />
          <div className="text-center">
            <Button>Submit</Button>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>AD</CardHeader>
            <CardBody>
              <section>Place your AD here</section>
            </CardBody>
            <CardFooter className="justify-end">
              <Button className="bg-black text-white">Enter</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="p-9 grid grid-cols-3 gap-3">
        {Array.isArray(data) && data.length > 0
          ? data.map((item) => (
              <Event className="mb-3" entry={item} key={item.id} />
            ))
          : null}
      </div>
    </>
  );
}
