'use client';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { createContext, useContext, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { api } from '@/lib/api';


const SocketCtx = createContext<Socket | null>(null);
const UserCtx = createContext<any>(null);


export function QueryProvider({ children }: { children: React.ReactNode }) {
const [qc] = useState(() => new QueryClient());
return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
}


export function SocketProvider({ children }: { children: React.ReactNode }) {
const socket = useMemo(() => io(process.env.NEXT_PUBLIC_WS_URL ?? 'http://localhost:3001', {
auth: (cb: any) => cb({ token: typeof window !== 'undefined' ? localStorage.getItem('token') : undefined }),
}), []);
return <SocketCtx.Provider value={socket}>{children}</SocketCtx.Provider>;
}


export function UserProvider({ children }: { children: React.ReactNode }) {
const { data } = useQuery({ queryKey: ['me'], queryFn: async () => (await api.get('/auth/me')).data, staleTime: 60_000 });
return <UserCtx.Provider value={data ?? null}>{children}</UserCtx.Provider>;
}


export function useSocket() { const s = useContext(SocketCtx); if (!s) throw new Error('Socket not available'); return s; }
export function useUser() { return useContext(UserCtx); }
