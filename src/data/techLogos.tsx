import React from 'react';
import { LogoItem } from '../components/LogoLoop';

export const techLogos: LogoItem[] = [
  {
    title: "Cloudflare",
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#F38020">
          <path d="M16.482 14.864l.375-1.758a.4.4 0 00-.39-.485H6.551a.4.4 0 00-.394.33L5.7 14.864a.4.4 0 00.394.47h9.994a.4.4 0 00.394-.47zM19.98 12.625l-1.05-4.823a4.78 4.78 0 00-4.66-3.766 4.75 4.75 0 00-4.394 2.93 4.14 4.14 0 00-1.734-.378 4.19 4.19 0 00-4.142 3.528A4.01 4.01 0 000 14.1c0 2.213 1.792 4.008 4.004 4.008h15.992A4.007 4.007 0 0024 14.1a3.99 3.99 0 00-4.02-1.475z"/>
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">CLOUDFLARE</span>
      </div>
    )
  },
  {
    title: "Google",
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
          <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.29v3.15C3.26 21.3 7.35 24 12 24z"/>
          <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.29C.47 8.2.01 10.05.01 12s.46 3.8 1.28 5.42l3.99-3.15z"/>
          <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.35 0 3.26 2.7 1.29 6.58l3.99 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">GOOGLE</span>
      </div>
    )
  },
  {
    title: "Vercel",
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1">
        <svg className="w-4 h-4 flex-shrink-0 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 22.5H0L12 1.5L24 22.5Z"/>
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">VERCEL</span>
      </div>
    )
  },
  {
    title: "Supabase",
    node: (
      <div className="flex items-center gap-2 px-3 py-1">
        <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 106 109" fill="none">
          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="#249361" />
          <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">SUPABASE</span>
      </div>
    )
  },
  {
    title: "GitHub",
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1">
        <svg className="w-4 h-4 flex-shrink-0 text-slate-900" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">GITHUB</span>
      </div>
    )
  },
  {
    title: "Salesforce",
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#00A1E0">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-2.89 0-5.4 1.64-6.65 4.04C2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">SALESFORCE</span>
      </div>
    )
  },
  {
    title: "Stripe",
    node: (
      <div className="flex items-center gap-2.5 px-3 py-1">
        <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="#635BFF">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.763-1.444 2.112-1.444 1.724 0 3.284.697 4.316 1.341l.983-3.218C16.892 2.607 14.887 2 12.632 2 8.354 2 5.518 4.296 5.518 8.016c0 4.607 5.922 4.966 5.922 7.02 0 .979-.877 1.636-2.38 1.636-1.956 0-3.876-.848-5.07-1.636l-1.026 3.298C4.303 19.387 6.782 20.2 9.539 20.2c4.464 0 7.42-2.164 7.42-6.07 0-4.832-6.06-5.187-6.06-7.02 0-.831.72-1.385 1.957-1.385.952 0 2.052.28 2.89.72l.868-3.031c-.83-.418-2.227-.852-3.878-.852"/>
        </svg>
        <span className="font-bold text-xs uppercase tracking-wider text-slate-800 whitespace-nowrap">STRIPE</span>
      </div>
    )
  }
];





