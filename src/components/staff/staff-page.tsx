import { StaffFoundersSection } from "@/components/staff/staff-founders-section";
import { StaffIntroSection } from "@/components/staff/staff-intro-section";
import { StaffMembersSection } from "@/components/staff/staff-members-section";

export function StaffPage() {
  return (
    <main className="overflow-clip bg-[#F9FCFF]">
      <StaffIntroSection />
      <StaffFoundersSection />
      <StaffMembersSection />
    </main>
  );
}
