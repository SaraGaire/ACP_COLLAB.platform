import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'


export default function ProblemCard({ p }: { p: any }) {
return (
<Card>
<CardHeader>
<CardTitle className="flex items-center justify-between">
<span>{p.title}</span>
<div className="flex gap-1">{p.tags?.map((t: any) => <Badge key={t.name}>{t.name}</Badge>)}</div>
</CardTitle>
</CardHeader>
<CardContent>
<p className="line-clamp-3 text-sm text-neutral-600" dangerouslySetInnerHTML={{ __html: p.excerpt ?? '' }} />
</CardContent>
</Card>
)
}
