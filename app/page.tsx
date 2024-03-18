'use client';
import Image from "next/image";
import Link from 'next/link'
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import { access } from "fs";

export default function Home() {
  const client_id = "test";
  const state = "qwerty";
  const redirect_uri = "http://127.0.0.1:3002/api/passkeep-callback";
  const scope = "write";  
  const response_type = "code";

  const req_url = `http://127.0.0.1:3000/oauth/authorize?response_type=${response_type}&client_id=${client_id}&state=${state}&redirect_uri=${redirect_uri}&scope=${scope}`;

  const access_token = localStorage.getItem('access_token');
  const refresh_token = localStorage.getItem('refresh_token');
  const exp = localStorage.getItem('exp');
  const tscope = localStorage.getItem('scope');
  
  /*
  console.log(access_token);
  console.log(refresh_token);
  console.log(exp);
  console.log(tscope);
  */

  return (
    <>
      {access_token != undefined ? 
      <div>
        <h1>access_token: {access_token}</h1>
        <h1>refresh_token: {refresh_token}</h1> 
        <h1>exp: {exp}</h1>
        <h1>scope: {tscope}</h1>
      </div>
      : <Link href={req_url}>Sign In</Link>
      }
      
    </>
  );
}
