import { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';
import * as txml from 'txml';
import './Main.css';


interface ContainerProps { }

const Main: React.FC<ContainerProps> = () => {    
  const [postArray, setPostArray] = useState<any>([]);

  useEffect(() => {
    // update the state with post info
    setPostArray(fetchPostArray());
  }, []);

function fetchPostArray():any {
  axios.get('/assets/blogposts.xml', {
   }).then((response : any) =>{

    const xml=response.data;
    const postArray = txml.parse(response.data)[1]['children']
    console.log(postArray)
    return postArray;

   }).catch(error=> console.log(`Error: ${error}`));
  }

if(postArray){
  return (
    // <div className='blogPosts'>
    //      {postArray.map(post=>{
    //        return (
    //        <div> 
    //          <Post title={post[2]['children'][0]} link='' author='' summary='' id='' imageUrl='' date='' />
    //          </div>)
    //      })}
    // </div>
    <h1>test</h1>
  );
}else{
  return <>No Posts</>
}
}

export default Main;