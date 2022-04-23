import { useState, useEffect } from 'react';
import axios from 'axios';
import useScrollbarSize from 'react-scrollbar-size';
import './Nav.css';

interface ContainerProps { }

const Nav: React.FC<ContainerProps> = () => {
  const [norrisJoke, setNorrisJoke] = useState<any>(null);
  
  useEffect(() => {
    // update the state with joke 
    fetchNorrisJoke();

    // setInterval updates the state every 60 seconds (i.e., 60k milliseconds)
    setInterval(fetchNorrisJoke,60000)

  
  }, []);

  function fetchNorrisJoke(){
    let url ='https://api.chucknorris.io/jokes/random'
    axios.get(url, {
  }).then((response:any)=>{
    const joke = response.data.value;
    setNorrisJoke(joke);
  })

}

  const { height, width } = useScrollbarSize();

  if (norrisJoke){

    let scrollbarWidth = width;
  return (<div className='lol' style={{marginRight:`${width+'px'}`}}>
  <img src='/assets/images/cryinglaughing.gif' />
    <div className='jokeContainer'>
    <div className='jokeHeader'>Chuck Norris Joke:</div>
    <div className='joke'>{norrisJoke}</div>
    </div>
    </ div>
  )}else{
   return <>Sorry, No Jokes Available</>
  }
};

export default Nav;