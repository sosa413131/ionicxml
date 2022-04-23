import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton, IonFab,  IonFabButton, useIonRouter } from '@ionic/react';
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
                <img className ='postImage' src={imageUrl}/> 
                <IonCardTitle><a id={id} href={link}>{title}</a></IonCardTitle>
                <IonCardSubtitle> By {author}</IonCardSubtitle>
            </IonCardHeader> 

            <IonCardContent>
                <p>{summary}</p>
                <div className='date'>{date}</div>
            </IonCardContent>
          <IonFab vertical="center" horizontal="end">
                <IonFabButton href={link}>
                    <IonIcon icon={arrowForwardCircle}/>
                </IonFabButton>
            </IonFab>
        </IonCard>
    );
};

export default Post;
