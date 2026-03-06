import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full min-w-0 rounded-none border border-[#E5DCD3] bg-transparent px-4 py-3 text-base text-[#1A1A1A] transition-[color,box-shadow,border-color] outline-none placeholder:text-[#1A1A1A] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-[#CBB8A5] focus-visible:ring-[3px] focus-visible:ring-[#CBB8A5]/40",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Input }
