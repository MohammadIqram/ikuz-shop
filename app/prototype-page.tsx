import PrototypeFrame from "./prototype-frame";
import { prototypes, type PrototypeSlug } from "./prototype-routes";

export default function PrototypePage({ page }: { page: PrototypeSlug }) {
  const prototype = prototypes[page];
  return <PrototypeFrame src={prototype.src} title={prototype.title} />;
}
