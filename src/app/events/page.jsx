"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  DateInput,
  DatePicker,
  Divider,
  Input,
  Textarea,
  TimeInput,
} from "@nextui-org/react";
import { useState } from "react";

const data = [
  {
    id: "abc123",
    title: "Microsoft AI Demo 001",
    cover_image: "", // image here
    summary: "Join Microsoft AI Demo for tech learning session",
    date: "10/01/2024",
    time: "9:00",
    cost: 9,
    ticket_sold: 9,
    ticket_total: 20,
  },
  {
    id: "abc456",
    title: "Microsoft AI Demo 002",
    cover_image: "", // image here
    summary: "Join Microsoft AI Demo for tech learning session",
    date: "10/01/2024",
    time: "9:00",
    cost: 9,
    ticket_sold: 9,
    ticket_total: 20,
  },
  {
    id: "abc789",
    title: "Microsoft AI Demo 003",
    cover_image: "", // image here
    summary: "Join Microsoft AI Demo for tech learning session",
    date: "10/01/2024",
    time: "9:00",
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
        <div>
          date time: {entry.date} {entry.time}
        </div>
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
  const [events, setEvents] = useState(data);
  const [event, setEvent] = useState({});

  const handleEventCreateFormSubmit = (e) => {
    e.preventDefault();
    console.log("handleEventCreateClick", [
      ...events,
      {
        id: new Date().getTime(),
        ...event,
      },
    ]);
    setEvents([
      ...events,
      {
        id: new Date().getTime(),
        ...event,
      },
    ]);
  };

  return (
    <>
      <h1 className="mt-9 px-9 text-2xl">Event Publisher</h1>
      <div className="p-9 pt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="col-span-2 ">
          <form onSubmit={handleEventCreateFormSubmit}>
            <Input
              isRequired
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
              className="mb-3"
              label="title"
            />
            <Textarea
              onChange={(e) => setEvent({ ...event, summary: e.target.value })}
              className="mb-3"
              label="summary"
            />
            <DatePicker
              isRequired
              onChange={(v) =>
                setEvent({
                  ...event,
                  date: `${v.month}/${v.day}/${v.year}`,
                })
              }
              className="mb-3"
              label="date"
            />
            <TimeInput
              onChange={(v) =>
                setEvent({
                  ...event,
                  time: `${v.hour}:${v.minute}:${v.second}`,
                })
              }
              className="mb-3"
              label="time"
            />
            <Input
              onChange={(e) => setEvent({ ...event, location: e.target.value })}
              className="mb-3"
              label="location"
            />
            <Input
              isRequired
              onChange={(e) => setEvent({ ...event, url: e.target.value })}
              className="mb-3"
              label="RSVP URL"
            />
            <div className="text-center">
              <Button type="submit">Create</Button>
            </div>
          </form>
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
      <Divider />
      <div className="p-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.isArray(events) && events.length > 0
          ? events.map((item) => (
              <Event className="mb-3" entry={item} key={item.id} />
            ))
          : null}
      </div>
    </>
  );
}
