import ClientsCarousel from "./clients-carousal";

export default function Clients() {
  return (
    <section id="testimonials" className="flex__col gap-section">
      <h3 className="section__heading">
        Kind words from <span className="text-color">Satisfied Clients</span>
      </h3>
      <div className="flex__center">
        <ClientsCarousel />
      </div>
    </section>
  );
}
