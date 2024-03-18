'use client';
import { redirect } from 'next/navigation'
import {usePasskeepToken} from '@/app/hooks/usePasskeepToken'

export default function Home() {
  usePasskeepToken();
  redirect("/");
}
