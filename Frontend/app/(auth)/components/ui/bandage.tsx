import { HTMLAttributes } from 'react'
export function Badge({ className='', ...p }: HTMLAttributes<HTMLSpanElement>) { return <span {...p} className={`inline-flex items-center rounded-md bg-neutral-900 px-2 py-0.5 text-xs text-white ${className}`} /> }
