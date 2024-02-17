import { RobotoSlabHeading } from "@/app/fonts";

export default function Heading({ children }) {
  return (
    <h1 className={`font-bold text-2xl pb-3 ${RobotoSlabHeading.className}`}>
      {children}
    </h1>
  )
}