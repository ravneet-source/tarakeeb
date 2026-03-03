import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-none text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:ring-[3px] focus-visible:ring-ring/40 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border border-[#CBB8A5] text-[#1A1A1A] hover:bg-[#CBB8A5] hover:text-[#F6EFE6]",
        destructive: "border border-[#9D5A4E] text-[#9D5A4E] hover:bg-[#9D5A4E] hover:text-[#F6EFE6]",
        outline:
          "border border-[#E5DCD3] text-[#1A1A1A] hover:border-[#CBB8A5] hover:bg-[#F3EDE5]",
        secondary:
          "border border-transparent text-[#1A1A1A] hover:bg-[#F3EDE5]",
        ghost: "text-[#1A1A1A] hover:bg-[#F3EDE5]",
        link: "text-[#1A1A1A] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2 has-[>svg]:px-4",
        xs: "h-7 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-8 has-[>svg]:px-5",
        icon: "size-10",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
