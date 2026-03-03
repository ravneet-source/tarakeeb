import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-36 w-full rounded-none border border-[#E5DCD3] bg-transparent px-4 py-3 text-base text-[#1A1A1A] transition-[color,box-shadow,border-color] outline-none placeholder:text-[#4A4A4A] focus-visible:border-[#CBB8A5] focus-visible:ring-[3px] focus-visible:ring-[#CBB8A5]/40 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
