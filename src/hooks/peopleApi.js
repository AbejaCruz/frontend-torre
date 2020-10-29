import { useEffect, useState } from 'react';

const peopleApi = url => {
  const [people, setpeople] = useState([]);
  useEffect(() => {
    window
      .fetch(url, {
        method: 'POST',
        headers: {
           'Accept': 'application/json'
        }
     }).then(response => response.json())
     .then(data => setpeople(data))
      
  }, []);
   return people;
};


export default peopleApi;
