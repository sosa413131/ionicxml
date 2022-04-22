import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import { RouteComponentProps, useHistory, useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios';
import * as txml from 'txml';

interface SummaryPageProps extends RouteComponentProps<{ 
    id:string, 
}>{}

const Summary: React.FC<SummaryPageProps> = ({match}) => {
    const [post, setPost] = useState<any>(null);

    useEffect(() => {
        // update the state with post info
        fetchPost();            
    }, []);

    // query to get the blog post with an ID that matches the ID from the url parameter
    function fetchPost(){
    axios.get('/assets/blogposts.xml', {
     }).then((response : any) =>{

        const xml = response.data;
        const obj= txml.parse(response.data);

        for (var i=0; i<obj[1]['children'].length; i++){
            if(obj[1]['children'][i]["attributes"]["id"]==match.params.id){
                setPost(obj[1]['children'][i]);
            }
        }

  }).catch(error=> console.log(`Error: ${error}`));

}
if(post){
    return (
        <div>
           <p><span className='keyName'> id: </span>{post.attributes.id}</p>
           <p><span className='keyName'> date: </span>{post.children[0].children[0]}</p>
           <p><span className='keyName'> author: </span>{post.children[1].children[0]}</p>
           <p><span className='keyName' > title: </span>{post.children[2].children[0]}</p>
           <p><span className='keyName'> summary: </span>{post.children[3].children[0]}</p>
           <p><span className='keyName'> body: </span>{post.children[4].children[0]}</p>
        </div>
    )
        }else{
            return<> No match for that post ID</>
        }
    

    }
export default Summary;
