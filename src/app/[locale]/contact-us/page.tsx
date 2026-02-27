import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";

export default function ContactUs() {
  return (
    <>
      <h2 className="text-2xl">Contact Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
        <Card>
          <CardHeader>
            <h3 className="text-xl mt-3">Dory Power</h3>
          </CardHeader>
          <CardBody>
            <ul className="list-inside">
              <li>
                Jay Lin{" "}
                <Link
                  href="https://wa.me/+14153702887"
                  isExternal
                  showAnchorIcon
                >
                  +1 (415) 370-2887
                </Link>
              </li>
              <li>
                Micheal Feng{" "}
                <Link
                  href="https://wa.me/+16503027093"
                  isExternal
                  showAnchorIcon
                >
                  +1 (650) 302-7093
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl mt-3">Limo Service</h3>
          </CardHeader>
          <CardBody>
            <ul className="list-inside">
              <li>
                Micheal Feng{" "}
                <Link
                  href="https://wa.me/+16503027093"
                  isExternal
                  showAnchorIcon
                >
                  +1 (650) 302-7093
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl mt-3">Restaurant System</h3>
          </CardHeader>
          <CardBody>
            <ul className="list-inside">
              <li>
                Micheal Feng{" "}
                <Link
                  href="https://wa.me/+16503027093"
                  isExternal
                  showAnchorIcon
                >
                  +1 (650) 302-7093
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl mt-3">Other</h3>
          </CardHeader>
          <CardBody>
            <ul className="list-inside">
              <li>
                Jay Lin{" "}
                <Link
                  href="https://wa.me/+14153702887"
                  isExternal
                  showAnchorIcon
                >
                  +1 (415) 370-2887
                </Link>
              </li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
