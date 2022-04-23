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
  }, []);

function fetchPostArray():void {
  axios.get('/assets/blogposts.xml', {
   }).then((response : any) =>{

    const xml=response.data;
    const postArray = txml.parse(response.data)[1]['children']
    // console.log(postArray[0])
    setPostArray(postArray);

   }).catch(error=> console.log(`Error: ${error}`));
  }

  function capitalizeTitle(titleUncapitalized :string){
    var array = titleUncapitalized.split(" ");
    var newTitle=''
    for (var i=0; i<array.length; i++){
      let word=array[i];
      word = word.charAt(0).toUpperCase() + word.slice(1);
      newTitle=newTitle+word+' ';
    }

    return newTitle;
    
  }

if(postArray){
  return (
    <div className='blogPosts'>
         {postArray.map((post:any, index:string)=>{

          //  console.log(newTitle)
           return (
           <div key={index}> 
             <Post 
              id={post["attributes"]["id"]}
              date={post['children'][0]['children'][0]}
              author={post['children'][1]['children'][0]}
              title={capitalizeTitle(post['children'][2]['children'][0])} 
              summary={post['children'][3]['children'][0]} 
              imageUrl={`/assets/images/${post['children'][5]['children'][0]}`} 
              link={`/summary/${post['attributes']['id']}`} />

             </div>)
         })}
    </div>
  );
}else{
  return <>No Posts</>
}
}

export default Main;