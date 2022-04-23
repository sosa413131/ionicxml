import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFab,  IonFabButton, useIonRouter, IonImg } from '@ionic/react';
import {arrowForwardCircle} from 'ionicons/icons';
import './Post.css';

interface ContainerProps { 
    title: string, 
    link: string, 
    author: string, 
    summary: string, 
    id:string, 
    imageUrl:string,
    date: string
}

const Post: React.FC<ContainerProps> = ({title, link, author, summary, id, imageUrl, date}) => {

    return (
        <IonCard className='post'>
            <IonCardHeader>         
                <IonImg className ='postImage' src={imageUrl}/> 
                <IonCardTitle><a id={id} href={link}><h1>{title}</h1></a></IonCardTitle>
                <IonCardSubtitle> By {author}</IonCardSubtitle>
            </IonCardHeader> 

            <IonCardContent>
                <div><p>{summary}</p></div>
                <div className='date'>{date}</div>
                <IonFab className='button'>
                <IonFabButton href={link}>
                    <IonIcon icon={arrowForwardCircle}/>
                </IonFabButton>
            </IonFab>
            </IonCardContent>

        </IonCard>
    );
};

export default Post;
