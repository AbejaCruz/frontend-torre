import { useEffect, useState } from 'react';

const personApi = url => {
  const [person, setperson] = useState([]);
  useEffect(() => {
    window
      .fetch(url, {
        method: 'GET',
        headers: {
           'Accept': 'application/json'
        }
     }).then(response => response.json())
     .then(data => setperson(data))
      
  }, []);
  console.log(person)
   return person;
};


export default personApi;
