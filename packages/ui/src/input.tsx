import { forwardRef,type InputHTMLAttributes } from "react"
import { cva } from "class-variance-authority"
import { cn } from "."

const inputVariants = cva(
   `block h-[37px] w-full rounded-md border px-3 transition placeholder:text-foreground/40 focus:outline-none focus:ring focus:ring-border/50`
)
const Input = forwardRef<
   HTMLInputElement,
   InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
   return (
      <input
         type={type}
         className={cn(inputVariants(), className)}
         ref={ref}
         {...props}
      />
   )
})

export { Input, inputVariants }
