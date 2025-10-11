import { TextareaHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
<textarea ref={ref} className={clsx('w-full rounded-md border px-3 py-2 text-sm', className)} {...props} />
))
Textarea.displayName = 'Textarea'
export default Textarea
