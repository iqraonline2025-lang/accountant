import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Go to homepage"
      className="inline-flex items-center transition-transform hover:scale-105"
    >
      <Image
        src="/logo.png"
        alt="Company Logo"
        width={90}
        height={90}
        priority
        className="h-12 w-auto object-contain"
      />
    </Link>
  );
}