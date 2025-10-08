'use client'
import { useQuery } from '@tanstack/react-query'
import TutorCard from '@/components/tutor-card'
import { api } from '@/lib/api'


export default function TutorsPage() {
const { data } = useQuery({ queryKey: ['tutors'], queryFn: async () => (await api.get('/tutors')).data })
return (
<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
{data?.map((t:any)=> <TutorCard key={t.id} t={t} />)}
</div>
)
}
