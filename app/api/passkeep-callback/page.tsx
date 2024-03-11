'use client';
import Image from "next/image";
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import useSWR from "swr";

export default function Home() {
  const searchParams = useSearchParams();
  const [access_token, setAccessToken] = useState('');
  const r = {
    code: searchParams.get('code'),
  }
  const grant_type = "access_token";
  const client_id = "test";
  const client_secret = "test";
  const redirect_uri = "http://127.0.0.1:3002/";
  const req_url = `http://127.0.0.1:3001/oauth/access_token?grant_type=${grant_type}&client_id=${client_id}&client_secret=${client_secret}&redirect_uri=${redirect_uri}&code=${r.code}`;
  
  if(r.code != undefined)
  {
  useEffect(() => {
    fetch(req_url,
      {
        redirect: "follow",
      })
      //.then((res) => res.json())
      .then((data) => {
        console.log(data);
        /*if (data.access_token != undefined) {
          localStorage.setItem('access_token', data.access_token);
          setAccessToken(data.access_token);
        }*/
        //redirect('/');
        if (data.redirected) {
          window.location.href = data.url;
        }
      })
  }, [])
}
  return (
    <>
        <h1>{searchParams.get('access_token') != undefined ? searchParams.get('access_token') : false}</h1>
    </>
  );
}
