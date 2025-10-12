import { InputHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
<input ref={ref} className={clsx('w-full rounded-md border px-3 py-2 text-sm', className)} {...props} />
))
Input.displayName = 'Input'
export default Input
