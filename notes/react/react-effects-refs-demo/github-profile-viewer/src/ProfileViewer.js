import React, { useState, useEffect } from "react";
import axios from 'axios';


const ProfileViewer = ({name}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${name}`).then(res => {
      setData(res.data.name)
    })
  }, [name])


  return (
    <h3>{data ? data : 'Loading...'}</h3>
  )
}

export default ProfileViewer;