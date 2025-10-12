import { ButtonHTMLAttributes, forwardRef } from 'react'
import { clsx } from 'clsx'


type Props = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'outline'|'ghost' }
export const Button = forwardRef<HTMLButtonElement, Props>(({ className, variant='default', ...props }, ref) => (
<button ref={ref} className={clsx('inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
variant==='outline' && 'border', variant==='ghost' && 'bg-transparent hover:bg-neutral-100', variant==='default' && 'bg-black text-white hover:bg-neutral-800', className)} {...props} />
))
Button.displayName = 'Button'
export default Button
