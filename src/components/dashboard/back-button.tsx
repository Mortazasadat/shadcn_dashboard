import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface backButtonProps {
  text: string;
  link: string;
}

function BackButton({ text, link }: backButtonProps) {
  return (
    <Link
      href={link}
      className="text-gray-500 hover:underline flex items-center font-bold mb-5"
    >
      <ArrowLeftCircle size={18} className="mr-1" />
      {text}
    </Link>
  );
}

export default BackButton;
