import clsx from "clsx";

interface NavLinkProps {
  href: string;
  content: string;
  active: string;
  activeSection: string;
}

export default function NavBarLink({
  href,
  content,
  active,
  activeSection,
}: NavLinkProps) {
  return (
    <a
      href={href}
      target="_self"
      className={clsx(
        "p-0.5 rounded font-medium transition-colors duration-300",
        {
          "bg-color text-white": activeSection === active,
          "hover:opacity-85": activeSection !== active,
        }
      )}
    >
      {content}
    </a>
  );
}
