import { HTMLAttributes } from 'react'
export function Card(p: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`rounded-xl border ${p.className??''}`} /> }
export function CardHeader(p: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`border-b p-4 ${p.className??''}`} /> }
export function CardTitle(p: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`text-base font-semibold ${p.className??''}`} /> }
export function CardContent(p: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`p-4 ${p.className??''}`} /> }
export function CardFooter(p: HTMLAttributes<HTMLDivElement>) { return <div {...p} className={`border-t p-4 ${p.className??''}`} /> }
