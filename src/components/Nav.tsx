import { useState, useEffect } from 'react';
import {IonIcon, IonFab, IonFabButton, IonImg} from '@ionic/react'
import axios from 'axios';
import useScrollbarSize from 'react-scrollbar-size';
import {arrowUpCircle} from 'ionicons/icons';
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

function backToTop(){
  console.log("backToTop")
}

  const { height, width } = useScrollbarSize();

  if (norrisJoke){
    return (<div className='lol' style={{marginRight:`${width+'px'}`}}>
    <IonImg src='/assets/images/cryinglaughing.gif' />
      <div className='jokeContainer'>
      <div className='jokeHeader'>Chuck Norris Joke:</div>
      <div className='joke'>{norrisJoke}</div>
      </div>
      {/* <IonFab><IonIcon icon={arrowUpCircle} onClick={backToTop}></IonIcon></IonFab> */}
      </div>
    )}else{
   return <>Sorry, No Jokes Available</>
  }
};

export default Nav;