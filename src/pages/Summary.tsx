import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonBreadcrumbs, IonBreadcrumb, IonIcon, IonList, IonItem, IonThumbnail, IonImg, IonLabel  } from '@ionic/react';
import { folder, home, planetOutline, key, keyOutline, keySharp} from 'ionicons/icons';
import { RouteComponentProps, useHistory, useParams} from "react-router-dom"
import { useState, useEffect } from 'react'
import axios from 'axios';
import * as txml from 'txml';
import './Summary.css'
import Footer from '../components/Footer'
import { capitalizeTitle } from '../utils/utility';

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
    function fetchPost():void{
    axios.get('/assets/blogposts.xml', {
     }).then((response : any) =>{

        const xml = response.data;
        const obj= txml.parse(response.data);

        for (var i=0; i<obj[1]['children'].length; i++){
            if(obj[1]['children'][i]["attributes"]["id"]===match.params.id){
                setPost(obj[1]['children'][i]);
            }
        }

  }).catch(error=> console.log(`Error: ${error}`));

}
if(post){
    return (
        <IonPage>
            <IonBreadcrumbs color="secondary">
                <IonBreadcrumb href='/'> 
                     Home
                </IonBreadcrumb>
                <IonBreadcrumb href={`/summary/${post.attributes.id}`}>
                     Summary
                </IonBreadcrumb>
            </IonBreadcrumbs>
                {/* <IonTitle>            */}
                    <span className='keyName title' >{capitalizeTitle(post.children[2].children[0])}</span>
                {/* </IonTitle> */}
                <IonContent>
                    <IonImg src={`/assets/images/${post.children[5].children[0]}`}/>
                    <p><span className='keyName'> date: </span>{post.children[0].children[0]}</p>
                    <p><span className='keyName'> author: </span>{post.children[1].children[0]}</p>
                    <p><span className='keyName'></span>{post.children[3].children[0]}</p>
                    <p><span className='keyName'> </span>{post.children[4].children[0]}</p>
                    <p className='id'><span className='keyName '>POST ID: </span>{post.attributes.id}</p>
                </IonContent>
                <Footer/>
        </IonPage>
    )
        }else{
            return<> No match for that post ID <Footer/></>
        }
    

    }
export default Summary;
