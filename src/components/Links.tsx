import { ILink } from "../libs/types";

interface ILinksProps {
  links: ILink[];
}
export default function Links({ links }: ILinksProps) {
  return (
    <div
      className="w-full h-full p-10"
      style={{
        backgroundImage:
          "radial-gradient(rgba(0, 0, 0, 0) 1px, rgba(0,0,0,0.1) 1px)",
        backgroundSize: "4px 4px",
        backdropFilter: "blur(3px)",
      }}
    >
      {links.map((link, index) => (
        <div key={index}>{link.label}</div>
      ))}
    </div>
  );
}
