// app/get-estimate/layout.tsx

import { EstimateProvider } from "@/context/EstimateContext";

export default function EstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <EstimateProvider>
      {children}
    </EstimateProvider>
  );
}
