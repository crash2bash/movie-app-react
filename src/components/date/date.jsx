import React, { useState, useEffect } from 'react';

const Date = ({ release }) => {
  const [releaseDate, setReleaseDate] = useState('TBA')

  useEffect(() => {
    if (!release) return
    const res = release.split('-')[0]
    setReleaseDate(res)
  }, [release])

  return (
    <span>{releaseDate}</span>
  )
}

export default Date;
