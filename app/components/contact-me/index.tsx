import ContactMeDialog from "./contact-me-dialog";

export default function ContactMe() {
  return (
    <section id="contact" className="flex__col flex__center text-center gap-4">
      <h3 className="text-2xl font-bold capitalize">
        Ready to take your <span className="text-color">web application</span>{" "}
        to the Next level?
      </h3>
      <p>Reach me out today, I can help you begin, continue, complete.</p>
      <ContactMeDialog />
    </section>
  );
}
