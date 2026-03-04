import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("w-full max-w-4xl mx-auto bg-white", className)}>
      {children}
    </div>
  );
};