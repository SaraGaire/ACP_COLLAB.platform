'use client'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'


export default function BookingModal({ tutor }: { tutor: any }) {
const [open, setOpen] = useState(false)
const [date, setDate] = useState<Date | undefined>(undefined)
const [startHour, setStartHour] = useState(10)
const [duration, setDuration] = useState(60)
const priceCents = tutor.rateCents ?? 4000


const book = async () => {
if (!date) return
const start = new Date(date)
start.setHours(startHour, 0, 0, 0)
const end = new Date(start.getTime() + duration * 60000)
await api.post('/bookings', { tutorId: tutor.id, start, end, sessionType: 'ONE_ON_ONE', priceCents })
setOpen(false)
alert('Booking requested!')
}


return (
<Dialog open={open} onOpenChange={setOpen}>
<DialogTrigger asChild><Button>Book</Button></DialogTrigger>
<DialogContent>
<DialogHeader><DialogTitle>Book {tutor.name}</DialogTitle></DialogHeader>
<div className="grid gap-4">
<Calendar selected={date} onSelect={setDate} />
<div className="grid grid-cols-2 gap-3">
<label className="text-sm">Start hour
<input type="number" min={6} max={22} className="w-full rounded-md border px-3 py-2" value={startHour} onChange={(e)=>setStartHour(parseInt(e.target.value||'10',10))} />
</label>
<label className="text-sm">Duration (min)
<input type="number" min={30} step={15} className="w-full rounded-md border px-3 py-2" value={duration} onChange={(e)=>setDuration(parseInt(e.target.value||'60',10))} />
</label>
</div>
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-600">Price: ${(priceCents/100).toFixed(2)}</span>
<Button onClick={book} disabled={!date}>Request booking</Button>
</div>
</div>
</DialogContent>
</Dialog>
)
}
