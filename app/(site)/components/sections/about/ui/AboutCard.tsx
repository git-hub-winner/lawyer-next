import { Separator } from "@/components/ui/separator";

interface AboutCardProps {
  title: string;
  content: string;
  highlight: string;
  stats: string;
}

export const AboutCard = ({ title, content, highlight, stats }: AboutCardProps) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-[#E4ECF0] bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-10 flex flex-col gap-4">
        <h3 className="text-primary text-xl font-semibold">{title}</h3>

        <p className="text-base leading-relaxed">{content}</p>
      </div>

      <div className="flex flex-col gap-3">
        <Separator />

        <span className="text-primary text-sm font-medium">{highlight}</span>

        <span className="text-primary text-sm">{stats}</span>
      </div>
    </div>
  );
};
