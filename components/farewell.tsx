import ContactMeDialog from "./contactMeDialog";
import LiveGradientText from "./liveGradientText";

export default function Farewell() {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center text-center gap-4"
    >
      <h3 className="text-5xl font-bold capitalize">
        Ready to take your <LiveGradientText text="Web Application" /> to the
        Next level?
      </h3>
      <p>Reach me out today, I can help you begin, continue, complete.</p>
      <ContactMeDialog />
    </div>
  );
}
