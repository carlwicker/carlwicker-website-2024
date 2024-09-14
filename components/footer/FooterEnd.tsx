import { FaGithub } from "react-icons/fa";

export default function FooterEnd() {
  return (
    <div className="w-full flex gap-5 lg:justify-end">
      <a
        href="https://github.com/carlwicker"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} color="white" />
      </a>
    </div>
  );
}
