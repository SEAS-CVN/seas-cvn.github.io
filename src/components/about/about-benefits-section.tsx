import Image from "next/image";

const benefitCards = [
  {
    title: "Giấy chứng nhận",
    description:
      "Giấy chứng nhận uy tín từ SEAS cùng các đối tác. Minh chứng cho năng lực.",
    image: "/images/layout/benefit-card-4.jpg",
    overlay: true,
  },
  {
    title: "Kết nối",
    description:
      "Kết nối với chuyên gia, sinh viên từ các trường đại học hàng đầu.",
    image: "/images/layout/benefit-card-2.jpg",
    overlay: true,
  },
  {
    title: "Thư giới thiệu",
    description: "Cơ hội nhận thư giới thiệu hỗ trợ hồ sơ đại học.",
    image: "/images/layout/benefit-card-1.jpg",
    overlay: true,
  },
  {
    title: "Trải nghiệm",
    description: "Giao lưu văn hóa, du lịch khám phá vẻ đẹp Quảng Bình.",
    image: "/images/layout/benefit-card-3.jpg",
    overlay: true,
  },
];

export function AboutBenefitsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-4 font-lexend text-[1.05rem] uppercase font-medium text-[#ff6d2d] md:text-lg">
            Đặc quyền học viên
          </p>
          <h2 className="font-space-grotesk text-[2.5rem] font-bold uppercase leading-[0.98] tracking-[-0.03em] text-[#04536E] md:text-6xl md:leading-[1.05]">
            Lợi ích tham gia
          </h2>
        </div>

        <div className="grid gap-4 md:gap-5 lg:grid-cols-2">
          {benefitCards.map((card) => (
            <article
              key={card.image + card.title}
              className="group relative overflow-hidden rounded-[24px] shadow-[0_18px_42px_rgba(150,199,224,0.22)] md:rounded-[26px]"
            >
              <Image
                src={card.image}
                alt={card.title || "SEAS benefit"}
                width={1200}
                height={700}
                className="h-[190px] w-full object-cover md:h-[235px]"
              />

              {card.overlay ? (
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,84,109,0.58),rgba(6,84,109,0.8))]" />
              ) : null}

              {card.title ? (
                <div className="absolute inset-0 flex flex-col justify-center px-7 text-white md:px-12">
                  <h3 className="font-space-grotesk text-[2rem] font-bold uppercase leading-none md:text-[2.35rem]">
                    {card.title}
                  </h3>
                  <p className="mt-4 max-w-[420px] font-lexend text-[1rem] font-medium leading-[1.6] text-white/95 md:text-[1.08rem]">
                    {card.description}
                  </p>
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
