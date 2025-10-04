import Link from 'next/link'
import { Button } from '@/components/ui/button'


export default function HomePage() {
return (
<section className="grid items-center gap-6 md:grid-cols-2">
<div className="space-y-4">
<h1 className="text-4xl font-bold">Collaborative learning, simplified</h1>
<p className="text-neutral-600">Post problems, find verified tutors, and book sessions with chat & whiteboard.</p>
<div className="flex gap-3">
<Button asChild><Link href="/problems/new">Post a problem</Link></Button>
<Button variant="outline" asChild><Link href="/tutors">Find a tutor</Link></Button>
</div>
</div>
<div className="rounded-2xl border p-6 shadow-sm">
<div className="grid grid-cols-3 gap-2">
{Array.from({ length: 9 }).map((_, i) => (
<div key={i} className="aspect-square rounded-lg bg-neutral-100" />
))}
</div>
</div>
</section>
)
}
