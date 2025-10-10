import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import BookingModal from '@/components/booking-modal'


export default function TutorCard({ t }: { t: any }) {
return (
<Card>
<CardHeader className="flex flex-row items-center gap-3">
<Avatar><AvatarFallback>{t.name?.slice(0,2)?.toUpperCase() ?? 'TU'}</AvatarFallback></Avatar>
<div className="space-y-1">
<CardTitle>{t.name}</CardTitle>
<p className="text-sm text-neutral-600">{t.subjects?.join(', ')}</p>
</div>
</CardHeader>
<CardContent>
<p className="text-sm">Rate: ${(t.rateCents/100).toFixed(2)}/hr · ⭐ {t.ratingAvg ?? 0}</p>
</CardContent>
<CardFooter>
<BookingModal tutor={t} />
</CardFooter>
</Card>
)
}
