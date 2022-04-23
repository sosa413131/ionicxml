import { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';
import * as txml from 'txml';
import './Main.css';
import { capitalizeTitle } from '../utils/utility';

interface ContainerProps { }

const Main: React.FC<ContainerProps> = () => {    
  const [postArray, setPostArray] = useState<any>(null);

  useEffect(() => {
    // update the state with post info
    fetchPostArray();
  }, []);

function fetchPostArray():void {
  axios.get('/assets/blogposts.xml', {
   }).then((response : any) =>{

    const xml=response.data;
    const postArray = txml.parse(response.data)[1]['children']
    setPostArray(postArray);

   }).catch(error=> console.log(`Error: ${error}`));
  }

  if(postArray){
    return (
      <div className='blogPosts'>
          {postArray.map((post:any, index:string)=>{
            return (
              <div key={index}> 
                <Post 
                  id={post["attributes"]["id"]}
                  date={post['children'][0]['children'][0]}
                  author={post['children'][1]['children'][0]}
                  title={capitalizeTitle(post['children'][2]['children'][0])} 
                  summary={post['children'][3]['children'][0]} 
                  imageUrl={`/assets/images/${post['children'][5]['children'][0]}`} 
                  link={`/blogpost/${post['attributes']['id']}`} 
                />
              </div>
              )
          })}
      </div>
    );
  }else{
    return <>No Posts</>
  }
}

export default Main;