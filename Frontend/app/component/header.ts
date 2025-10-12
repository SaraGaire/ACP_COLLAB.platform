'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useUser } from '@/components/providers';
import { clearToken } from '@/lib/auth';


const NavLink = ({ href, children }: any) => {
const path = usePathname();
const active = path === href;
return (
<Link href={href} className={`px-3 py-2 rounded-md ${active ? 'bg-muted' : 'hover:bg-muted'}`}>{children}</Link>
);
};


export default function Header() {
const me = useUser();
return (
<header className="border-b">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
<Link href="/" className="font-semibold">EduCollab</Link>
<nav className="hidden gap-2 md:flex">
<NavLink href="/problems">Problems</NavLink>
<NavLink href="/tutors">Tutors</NavLink>
</nav>
<div className="flex items-center gap-3">
{me ? (
<>
<span className="text-sm text-muted-foreground">Hi, {me.displayName ?? me.email}</span>
<Avatar className="h-8 w-8"><AvatarFallback>{(me.displayName ?? me.email).slice(0,2).toUpperCase()}</AvatarFallback></Avatar>
<Button size="sm" variant="ghost" onClick={()=>{clearToken(); window.location.reload();}}>Sign out</Button>
</>
) : (
<>
<Button asChild size="sm" variant="ghost"><Link href="/(auth)/sign-in">Sign in</Link></Button>
<Button asChild size="sm"><Link href="/(auth)/sign-up">Sign up</Link></Button>
</>
)}
</div>
</div>
</header>
);
}
