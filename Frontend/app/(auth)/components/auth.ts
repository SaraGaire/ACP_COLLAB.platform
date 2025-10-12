export function saveToken(token: string) {
localStorage.setItem('token', token);
document.cookie = `token=${encodeURIComponent(token)}; path=/; max-age=${60*60*24*7}`; // 7 days
}
export function clearToken() {
localStorage.removeItem('token');
document.cookie = 'token=; path=/; max-age=0';
}
export function getToken() { return localStorage.getItem('token'); }
