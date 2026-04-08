import Image from "next/image";

export function AboutIntroSection() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container space-y-5 md:space-y-8">
        <div className="grid gap-8 rounded-[28px] bg-[#F7FAFF] px-6 py-7 shadow-[0_18px_42px_rgba(150,199,224,0.12)] md:px-10 md:py-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <h1 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[#04536E] md:text-6xl">
            Về chúng tôi
          </h1>

          <div className="border-l-4 border-[#2D8BBA] pl-5 md:pl-6">
            <p className="font-lexend text-[1rem] leading-[1.9] text-[#4D5761] md:text-[1.06rem]">
              <span className="font-semibold text-[#4D5761]">
                SEAS (Summer in Engineering and Applied Sciences)
              </span>{" "}
              là{" "}
              <span className="font-semibold text-[#2D8BBA]">
                trường hè miễn phí
              </span>{" "}
              dành cho học sinh THPT miền Trung, được thành lập bởi các chuyên
              viên nghiên cứu người miền Trung đang làm việc tại các viện nghiên
              cứu hàng đầu trong nước và thế giới. Mục tiêu của SEAS là giúp các
              bạn học sinh tiếp cận với các ngành khoa học công nghệ mới như trí
              tuệ nhân tạo (AI), khoa học dữ liệu, lập trình, năng lượng tái
              tạo, công nghệ lượng tử, và hơn thế nữa!
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] shadow-[0_22px_52px_rgba(150,199,224,0.2)] md:rounded-[34px]">
          <Image
            src="/images/layout/about-hero-bg.png"
            alt="SEAS team"
            width={1440}
            height={800}
            className="h-[250px] w-full object-cover md:h-[420px]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
