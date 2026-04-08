import { PillArrowButton } from "@/components/shared/pill-arrow-button";

type FooterSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryAction: {
    href: string;
    label: string;
  };
  secondaryAction: {
    href: string;
    label: string;
  };
  backgroundImage?: string;
};

export function FooterSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage = "/images/layout/footer-bg.png",
}: FooterSectionProps) {
  return (
    <section className="container">
      <div
        className="pt-3 relative px-3 min-h-[500px] overflow-hidden rounded-[36px] bg-cover bg-center max-[900px]:min-h-[420px] max-md:min-h-[430px] max-md:rounded-[26px]"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(7,100,144,0.68), rgba(67,188,236,0.42)), url('${backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),linear-gradient(180deg,rgba(5,56,82,0.1),rgba(5,56,82,0.34))]" />
        <div className="relative mx-auto grid min-h-[500px] max-w-[860px] place-items-center gap-3.5 px-6 py-12 text-center max-[900px]:min-h-[420px] max-md:min-h-[430px] max-md:max-w-none max-md:place-items-start max-md:gap-4 max-md:px-4 max-md:py-7 max-md:text-left">
          <p className="m-0 font-space-grotesk text-[clamp(3.8rem,9vw,6.8rem)] font-bold uppercase leading-[0.92] text-white max-md:text-[4rem] max-md:leading-[0.94]">
            {title}
          </p>
          <h2 className="m-0 font-space-grotesk text-[clamp(2.3rem,5vw,2.8rem)] font-bold uppercase leading-[0.95] text-white max-md:text-[1.8rem] max-md:leading-[1.05]">
            {subtitle}
          </h2>
          <p className="font-lexend text-[1.3rem] leading-[1.55] text-white/95 max-md:text-[1.05rem] max-md:leading-[1.55]">
            {description}
          </p>
          <div className="mt-[18px] flex flex-wrap justify-center gap-3.5 max-md:w-full max-md:flex-col max-md:items-stretch max-md:justify-start max-md:gap-3 max-md:pt-2">
            <PillArrowButton
              href={primaryAction.href}
              label={primaryAction.label}
              variant="light"
              className="min-h-[58px] min-w-[220px] px-7 max-md:min-h-[54px] max-md:w-full max-md:min-w-0"
            />
            <PillArrowButton
              href={secondaryAction.href}
              label={secondaryAction.label}
              variant="outline-light"
              className="min-h-[58px] min-w-[220px] px-7 max-md:min-h-[54px] max-md:w-full max-md:min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
