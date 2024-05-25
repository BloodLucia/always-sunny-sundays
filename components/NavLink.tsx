"use client";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

interface Props {
  href?: string;
  className?: string;
}
export const NavLink: React.FC<PropsWithChildren<Props>> = ({
  href,
  className,
  children,
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <a 
      href={href} 
      className={clsx(
        'px-4 py-1.5 inline-flex text-base box-border text-black/80 justify-center items-center', 
        isActive ? 'border-2 border-black text-black font-semibold' : '', 
        className
      )}> 
      {children}
    </a>
  );
};
