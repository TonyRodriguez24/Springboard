import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm";

const BASE_URL = "https://api.github.com/users";

/** GitHub Profile Component --- shows info from GH API */

const ProfileViewerWithSearch = () => {
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState(BASE_URL)

  const search = term => {
    setUrl(`${BASE_URL}/${term}`)
  }

  useEffect(() => {
    console.log('in effect')
    async function loadProfile() {
      const res = await axios.get(url);
      setProfile(res.data);
    }
    loadProfile();
    return () => console.log('This runs before the effect itself except for the first time')
  }, [url])

  return (
    <div>
      {profile ? <h1>{profile.name}</h1> : <h1>Loading...</h1>}
      <ProfileSearchForm search={search}/>
    </div>
  )
}

export default ProfileViewerWithSearch;