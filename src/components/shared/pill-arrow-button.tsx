import { HiArrowRight } from "react-icons/hi";

type PillArrowButtonVariant = "brand" | "light" | "outline-light";

type PillArrowButtonProps = {
  href: string;
  label: string;
  className?: string;
  variant?: PillArrowButtonVariant;
};

const variantClasses: Record<PillArrowButtonVariant, string> = {
  brand:
    "bg-[linear-gradient(90deg,#2D8BBA_0%,#2D8BBA_100%)] text-white shadow-[0_4px_24px_rgba(45,139,186,0.28)]",
  light:
    "border-2 border-white bg-white text-[#2D8BBA] shadow-[0_4px_24px_rgba(255,255,255,0.16)]",
  "outline-light":
    "border-2 border-white bg-transparent text-white shadow-[0_4px_24px_rgba(4,77,97,0.14)]",
};

export function PillArrowButton({
  href,
  label,
  className = "",
  variant = "brand",
}: PillArrowButtonProps) {
  return (
    <a
      href={href}
      className={`font-space-grotesk inline-flex min-h-[44px] min-w-[232px] items-center justify-center gap-3 rounded-full px-6 text-[1.05rem] font-semibold uppercase ${variantClasses[variant]} ${className}`.trim()}
    >
      <span>{label}</span>
      <HiArrowRight aria-hidden="true" className="text-[1.35rem]" />
    </a>
  );
}
