import { HTMLAttributes } from 'react'
export function Avatar({ className='', ...p }: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`flex h-10 w-10 items-center justify-center rounded-full bg-neutral-200 ${className}`} /> }
export function AvatarFallback({ children }: { children?: React.ReactNode }) { return <span className="text-sm font-medium text-neutral-700">{children}</span> }
