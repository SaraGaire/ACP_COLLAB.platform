'use client'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { getPresign, uploadToS3 } from '@/lib/uploads'


export default function UploadWidget({ onUploaded }: { onUploaded: (url: string) => void }) {
const [file, setFile] = useState<File | null>(null)
const [uploading, setUploading] = useState(false)


const handleUpload = async () => {
if (!file) return
setUploading(true)
try {
const presign = await getPresign(file.name, file.type)
const url = await uploadToS3(file, presign)
onUploaded(url)
} catch (e: any) { alert(e.message ?? 'Upload failed') }
setUploading(false)
}


return (
<div className="flex items-center gap-2">
<Input type="file" onChange={(e)=>setFile(e.target.files?.[0] ?? null)} />
<Button onClick={handleUpload} disabled={!file || uploading}>{uploading ? 'Uploading…' : 'Upload'}</Button>
</div>
)
}
