import Image from "next/image";
import Link from "next/link";
import { staffFounders } from "@/components/staff/staff-members-content";

export function StaffFoundersSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <p className="mb-4 font-lexend text-[1.05rem] uppercase font-medium text-[#ff6d2d] md:text-lg">
          Founders
        </p>
        <h2 className="mb-8 md:mb-12 font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
          Người sáng lập SEAS
        </h2>

        <div className="grid gap-5 grid-cols-2 xl:grid-cols-4">
            {staffFounders.map((founder) => (
            <Link
              key={founder.name}
              href={`/staff/${founder.slug}`}
              className="group rounded-[28px] border-[2px] px-6 py-9 text-center transition-all duration-200 border-[#e8edf2] shadow-[0_16px_40px_rgba(150,199,224,0.12)] hover:border-[#2D8BBA] hover:bg-white hover:shadow-[0_22px_50px_rgba(45,139,186,0.2)] hover:-translate-y-0.5"
            >
              <div className="mx-auto mb-7 h-[138px] w-[138px] overflow-hidden rounded-full border-[3px] border-[#9bdaf6] shadow-[0_12px_28px_rgba(150,199,224,0.18)]">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={200}
                  height={200}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="font-space-grotesk text-[1.18rem] font-bold text-[#04536E] md:text-[1.3rem]">
                {founder.name}
              </h3>
              <p className="mt-4 font-lexend text-[1rem] leading-[1.6] text-[#4D5761]">
                {founder.role}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
