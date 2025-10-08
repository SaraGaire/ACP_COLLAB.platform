'use client'
import { useEffect, useState } from 'react'
import { useSocket } from '@/components/providers'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { api } from '@/lib/api'


export default function ChatPage({ params }: { params: { id: string } }) {
const socket = useSocket()
const [messages, setMessages] = useState<any[]>([])
const [text, setText] = useState('')


useEffect(() => { (async () => {
const res = await api.get(`/conversations/${params.id}/messages`)
setMessages(res.data ?? [])
})()
}, [params.id])


useEffect(() => {
socket.emit('join', params.id)
const handler = (m:any) => setMessages((prev)=>[...prev, m])
socket.on('message', handler)
return () => { socket.off('message', handler) }
}, [params.id, socket])


const send = async () => {
if (!text.trim()) return
const { data } = await api.post('/messages', { conversationId: params.id, text })
setMessages((prev)=>[...prev, data])
socket.emit('message', { room: params.id, text, userId: 'me' })
setText('')
}


return (
<div className="mx-auto max-w-3xl space-y-3">
<div className="h-[60vh] overflow-y-auto rounded-xl border p-4">
{messages.map((m,i)=> <div key={m.id ?? i} className="py-1 text-sm"><b>{m.sender?.displayName ?? m.userId ?? 'user'}:</b> {m.text ?? m.body}</div>)}
</div>
<form onSubmit={(e)=>{e.preventDefault(); send()}} className="flex gap-2">
<Input value={text} onChange={(e)=>setText(e.target.value)} placeholder="Type a message" />
<Button type="submit">Send</Button>
</form>
</div>
)
}
