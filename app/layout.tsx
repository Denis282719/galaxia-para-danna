import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'La galaxia de Danna',description:'Un universo hecho para mi niña de ojitos lindos.'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
