import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ExchangeCode from '@/app/services/exchangecode'

export function usePasskeepToken()
{
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  console.log(process.env.CLIENT_ID_PSASKEEP);
  const req_url = `http://127.0.0.1:3001/oauth/access_token?grant_type=access_token&client_id=${process.env.CLIENT_ID_PSASKEEP}&client_secret=${process.env.CLIENT_SECRET_PASSKEEP}&redirect_uri=${process.env.REDIRECT_URL_PASSKEEP}&code=${code}`;

  console.log(req_url)

  useEffect(() => {
    if(code != undefined)
    {
      ExchangeCode({req_url})
      .then((r) =>{
        console.log(r);
        if (r != undefined && r.access_token != undefined && r.refresh_token != undefined && r.exp != undefined && r.scope != undefined){
          localStorage.setItem('access_token', r.access_token);
          localStorage.setItem('refresh_token', r.refresh_token);
          localStorage.setItem('exp', r.exp);
          localStorage.setItem('scope', r.scope);
          //
        }
        else{
          //redirect("/api/passkeep-callback/Error");
        }
      });
    }
  }, [])
}
