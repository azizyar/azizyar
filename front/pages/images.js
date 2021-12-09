import React, { useState, useEffect } from 'react'
const test = () => {
  const [resourceType, setResourceType] = useState('posts')

  useEffect(() => {
    //`https://jsonplaceholder.typicode.com/${resourceType}`
    //`https://api.bol.com/catalog/v4/search/?q=8720279199817&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`
    fetch(
      `https://api.bol.com/catalog/v4/search/?q=8720279199817&offset=0&limit=1&dataoutput=products&apikey=92D2DDD17E2245BDAFC0E359939510CA&format=json`
    )
      .then((response) => response.json())
      .then((json) => console.log(json))

    // return () => {
    //   //cleanup
    // }
  }, [resourceType])

  return (
    <div>
      <button onClick={() => setResourceType('posts')}>Posts</button>
      <button onClick={() => setResourceType('users')}>Users</button>
      <button onClick={() => setResourceType('comments')}>Comments</button>
    </div>
  )
}

export default test
