import { Link } from "@nextui-org/react";

export default function Footer() {
  return (
    <div className="flex justify-between w-full flex-col">
      <div>
        <div>LAW OFFICE OF JESSICA Y. MENG</div>
        <div>4677 Old Ironsides Dr., Suite 350</div>
        <div>Santa Clara, CA 95054</div>
        <div>
          Mobile: <Link href="tel:5103783479">(510) 378-3479</Link>
        </div>
        <div>
          Telephone: <Link href="tel:4089869202">(408) 986-9202</Link>
        </div>
        <div>
          Facsimile: <Link href="tel:4089869206">(408) 986-9206</Link>
        </div>
        <div>
          <Link
            href="https://www.immigrationmeng.com"
            isExternal
            showAnchorIcon
          >
            www.immigrationmeng.com
          </Link>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.638998297387!2d-121.98147472327673!3d37.398368772082605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fc9c577463197%3A0xdf8f2ebb8688f687!2sParkway%20Plaza%2C%204677%20Old%20Ironsides%20Dr%20%23%20350%2C%20Santa%20Clara%2C%20CA%2095054!5e0!3m2!1sen!2sus!4v1725688023480!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg py-6 sm:h-96 sm:w-full"
      ></iframe>
    </div>
  );
}
