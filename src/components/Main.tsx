import { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';
import * as txml from 'txml';
import './Main.css';


interface ContainerProps { }

const Main: React.FC<ContainerProps> = () => {    
  const [postArray, setPostArray] = useState<any>(null);

  useEffect(() => {
    // update the state with post info
    fetchPostArray();
    // console.log("postArray:", postArray)
  }, []);

function fetchPostArray():any {
  axios.get('/assets/blogposts.xml', {
   }).then((response : any) =>{

    const xml=response.data;
    const postArray = txml.parse(response.data)[1]['children']
    console.log(postArray[0])
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
             title={post['children'][2]['children'][0]} 
             link={`/summary/${post['attributes']['id']}`} 
             author='' 
             summary='' 
             id='' 
             imageUrl='' 
             date='' />
             </div>)
         })}
    </div>

    // <>test</>
  );
}else{
  return <>No Posts</>
}
}

export default Main;