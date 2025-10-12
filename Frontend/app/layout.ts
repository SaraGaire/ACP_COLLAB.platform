// ...existing imports
import { QueryProvider, SocketProvider, UserProvider } from '@/components/providers';


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en" suppressHydrationWarning>
<body className="min-h-screen bg-background text-foreground">
<QueryProvider>
<SocketProvider>
<UserProvider>
<Header />
<main className="mx-auto max-w-7xl px-4 py-6">{children}</main>
</UserProvider>
</SocketProvider>
</QueryProvider>
</body>
</html>
);
}
