export default async function ExchangeCode(params:
    {
        req_url:string
    }

): Promise<any>
{
    let ret_data;
    //console.log("Begin")
    try{
        await fetch(params.req_url,
            {
            redirect: "follow",
            })
            .then((res) => res.json())
            .then((data) => {
                ret_data = data;
                //console.log(data)
                /*if (data.redirected) {
                    window.location.href = data.url;
                }*/
        })
    }
    catch(e){
        console.log(e);
    }
    //console.log(ret_data)
    return ret_data
}