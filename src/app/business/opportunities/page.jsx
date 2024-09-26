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
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-3">
        Oppotutnities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card>
          <Link isExternal href="https://kdhciddmbip.typeform.com/to/EUgmJmTM">
            <Image
              alt="Card background"
              className="object-cover rounded-none"
              src="/assets/images/business/oppotutnities/1_wvinldPNQzqnomViSsXJzA.jpg"
            />
          </Link>
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
          <Link href="/business/opportunities/dory-power">
            <Image
              alt="Card background"
              className="object-cover rounded-none"
              src="//dorypower.com/wp-content/uploads/2022/11/A7A5924-final-scaled.jpg"
            />
          </Link>
          <CardHeader className="text-xl font-bold">
            Dory Power Distributor Meeting
          </CardHeader>
          <CardBody>
            Founded in 2017 in Cleveland Ohio, Dory Power is a technology
            company focusing on the design and manufacturing of advanced lithium
            ion battery power systems for energy storage and backup power
            supply.
          </CardBody>
          <CardFooter className="justify-end">
            <Link href="/business/opportunities/dory-power">Learn more</Link>
          </CardFooter>
        </Card>
        <Card>
          <Link isExternal href="https://kdhciddmbip.typeform.com/to/D1n4jt6y">
            <Image
              alt="Card background"
              className="object-cover rounded-none"
              src="/assets/images/business/oppotutnities/betavee/product-image.png"
            />
          </Link>
          <CardHeader className="text-xl font-bold">
            Betavee Distributor
          </CardHeader>
          <CardBody>
            Betavee Rental Power Station operates on a highly profitable model
            characterized by small individual costs, frequent usage, and
            multiple orders. This approach enables high revenue generation,
            leading to rapid returns on investment. With low costs and
            substantial returns, the Rental Power Station represents a lucrative
            opportunity.
          </CardBody>
          <CardFooter className="justify-end text-gray-300">
            <Link
              isExternal
              showAnchorIcon
              href="https://kdhciddmbip.typeform.com/to/D1n4jt6y"
            >
              Sign up
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <Image
            alt="Card background"
            className="object-cover rounded-none w-full h-full"
            src="https://doordash-static.s3.amazonaws.com/media/store/header/8600.jpg"
          />
          <CardHeader className="text-xl font-bold">
            JY Restaurant System
          </CardHeader>
          <CardBody>
            Running a successful restaurant involves juggling many moving parts,
            from managing reservations and orders to overseeing staff and
            inventory. With JY Restaurant System, we simplify restaurant
            management by offering a comprehensive, user-friendly system that
            streamlines your daily operations.
          </CardBody>
          <CardFooter className="justify-end text-gray-300">
            Comming soon ...
          </CardFooter>
        </Card>
        <Card>
          <Image
            alt="Card background"
            className="object-cover rounded-none w-full h-full"
            src="https://cdn.prod.website-files.com/620ec747459e13c7cf12a39e/625b10a58137b364b18df2ea_iStock-94179607.jpg"
          />
          <CardHeader className="text-xl font-bold">Real Estate</CardHeader>
          <CardBody>
            Running a successful real estate business involves juggling many
            moving parts, from managing property listings and client
            interactions to overseeing staff and contracts. With JY Real Estate
            System, we simplify real estate management by offering a
            comprehensive, user-friendly system that streamlines your daily
            operations.
          </CardBody>
          <CardFooter className="justify-end text-gray-300">
            Comming soon ...
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
