import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { RouteComponentProps, useHistory, useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios';
import * as txml from 'txml';

interface SummaryPageProps extends RouteComponentProps<{ 
    id:string, 
}>{}

// , title, author, summary,  imageUrl, date, body
const Summary: React.FC<SummaryPageProps> = ({match}) => {
    const [post, setPost] = useState<any>();

    useEffect(() => {
        fetchPost();            
        
    }, []);

    // query to get the blog post with an ID that matches the ID from the url parameter
    function fetchPost(){
    axios.get('/assets/blogposts.xml', {
     }).then((response : any) =>{

        const xml = response.data;
        const json= txml.parse(response.data);

        for (var i=0; i<json[1]['children'].length; i++){
            if(json[1]['children'][i]["attributes"]["id"]==match.params.id){
                console.log("match found!")
                console.log("url param: ", match.params.id);
                console.log("matching id in xml: ", json[1]['children'][i]["attributes"]["id"] )
                console.log("post object:", json[1]['children'][i])
                setPost(json[1]['children'][i]);
            }
        }

  })
  .catch(error=> console.log(`Error: ${error}`));

}

    return (
        <div>
           <span className='keyName'> id:</span> {match.params.id} <br/>
           {/* <span className='keyName'> date: </span>{post.children[0].children[0]}<br/>
           <span className='keyName'> author: </span>{post.children[1].children[0]}<br/>
           <span className='keyName' > title:  </span>{post.children[2].children[0]}<br/>
           <span className='keyName'> summary: </span>{post.children[3].children[0]}<br/>
           <span className='keyName'> body:  </span>{post.children[4].children[0]} */}
        </div>
    )
    

    }
export default Summary;
