'use client'
import { useState } from 'react'
export function Slider({ defaultValue=[0], min=0, max=5, step=1, onValueChange }: { defaultValue?: number[]; min?: number; max?: number; step?: number; onValueChange?: (v:number[])=>void }) {
const [v, setV] = useState(defaultValue[0])
return (
<input type="range" min={min} max={max} step={step} value={v} onChange={(e)=>{ const n = parseInt(e.target.value,10); setV(n); onValueChange?.([n]) }} />
)
}
