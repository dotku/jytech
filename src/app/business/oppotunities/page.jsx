import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";

export default function Oppotunties() {
  return (
    <>
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">
        Oppotutnities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <Image
            alt="Card background"
            className="object-cover rounded-none"
            src="/assets/images/business/oppotutnities/1_wvinldPNQzqnomViSsXJzA.jpg"
          />
          <CardHeader className="text-xl font-bold">
            Micheal Limo Business
          </CardHeader>
          <CardBody>
            We are thrilled to invite you to enjoy the comfort, luxury, and
            convenience of Michael&apos;s Limo Service! Whether you&apos;re
            attending a special event, need a ride to the airport, or just want
            to travel in style, Michael&apos;s Limo Service is here to provide
            you with an unforgettable experience.
          </CardBody>
          <CardFooter className="justify-end">
            <Link
              isExternal
              showAnchorIcon
              href="https://kdhciddmbip.typeform.com/to/EUgmJmTM"
            >
              Sign up
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <Image
            alt="Card background"
            className="object-cover rounded-none"
            src="//dorypower.com/wp-content/uploads/2022/11/A7A5924-final-scaled.jpg"
          />
          <CardHeader className="text-xl font-bold">
            Dory Power Distributor Meeting
          </CardHeader>
          <CardBody>
            Founded in 2017 in Cleveland Ohio, Dory Power is a technology
            company focusing on the design and manufacturing of advanced lithium
            ion battery power systems for energy storage and backup power
            supply.
          </CardBody>
          <CardFooter className="justify-end text-gray-300">
            Comming soon ...
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
