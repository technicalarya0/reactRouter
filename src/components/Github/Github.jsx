import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/technicalarya0')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-4 bg-red-400 text-blue-800 text-3xl p-4'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="github picture" />
    </div>
  )
}

export default Github
