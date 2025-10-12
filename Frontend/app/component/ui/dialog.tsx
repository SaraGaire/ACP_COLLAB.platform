'use client'
import { DialogHTMLAttributes, HTMLAttributes, useEffect } from 'react'


export function Dialog({ open, onOpenChange, children }: any) { return open ? <div data-open onClick={()=>onOpenChange?.(false)} className="fixed inset-0 z-50 grid place-items-center bg-black/40">{children}</div> : null }
export function DialogTrigger({ asChild, children }: any) { return asChild ? children : <button>{children}</button> }
export function DialogContent({ children, onClick }: HTMLAttributes<HTMLDivElement>) {
const stop = (e:any)=>e.stopPropagation()
return <div onClick={stop} className="w-full max-w-lg rounded-xl bg-white p-4 shadow-xl">{children}</div>
}
export function DialogHeader(p: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`mb-2 ${p.className??''}`} /> }
export function DialogTitle(p: HTMLAttributes<HTMLHeadingElement>) { return <h3 {...p} className={`text-lg font-semibold ${p.className??''}`} /> }
