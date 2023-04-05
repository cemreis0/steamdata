import React, { useEffect, useState } from 'react'

const Steam = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const result = await fetch(`http://localhost:5000/steamdata`)
      const dataJSON = await result.json()
      setData(JSON.parse(dataJSON.data).response.games.slice(0, 10))
    }
    getData()
  }, [])

  console.log(data)

  return (
    <div className='lg:px-40 text-first font-light text-lg mb-10'>
      <h1 className='text-center mb-8'>Games Played on Steam in the Last 2 Weeks</h1>
      {data.map((game, index) => (
        <div key={index} className='flex mx-auto my-1 border border-first p-1 rounded-lg max-w-2xl'>
          <img src={`http://media.steampowered.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`} alt={game.name} />
          <p className='mx-5'>{game.name}</p>
          <p className='ml-auto'>{Math.round(game.playtime_2weeks / 60 * 10) / 10} hours</p>
        </div>
      ))}
    </div>
  )
}

export default Steam