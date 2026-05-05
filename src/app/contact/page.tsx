
import  { Suspense } from "react"; 
import ContactFrom from "./ContactForm";

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactFrom />
    </Suspense>
  );
}

