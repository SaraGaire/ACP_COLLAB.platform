'use client'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
export function Calendar({ selected, onSelect }: { selected?: Date; onSelect?: (d?: Date)=>void }) {
return <DayPicker mode="single" selected={selected} onSelect={onSelect} />
}
