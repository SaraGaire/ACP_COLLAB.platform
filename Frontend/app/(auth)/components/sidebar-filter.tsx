'use client'
import { Slider } from '@/components/ui/slider'
import { LabelHTMLAttributes } from 'react'


export function SidebarFilters({ value, onChange }: { value: any; onChange: (v:any)=>void }) {
return (
<aside className="sticky top-24 hidden w-64 shrink-0 space-y-6 md:block">
<div>
<label className="text-sm">Difficulty</label>
<Slider defaultValue={[3]} min={1} max={5} step={1} onValueChange={(v)=>onChange({ ...value, difficulty: v[0] })} />
</div>
</aside>
)
}
