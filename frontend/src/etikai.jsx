import React, { useEffect } from 'react'

const etikai = () => {
    const api="https://icanhazdadjoke.com/"

    let fetchingdata=async(data)=>{
        try{

            userinfo=await fetch(data)
            redabledata=await userinfo.json();
            console.log(redabledata)
        }
        catch{
            console.error(e)
        }

    }
    useEffect(()=>{etikai(api)},[])
  return (
    <>
    {etikai}
    </>
  )
}

export default etikai
