import Banner from "@/app/components/ui/banner";
import ContactSec from "@/app/components/layout/contactus/contactsec";
import HomeCta from "@/app/components/ui/homecta";

export default function ContactusPage() {
  return (
    <>
      <Banner pageKey="contactus" />
      <ContactSec />
      <HomeCta />
    </>
  );
}
