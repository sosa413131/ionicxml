import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol } from '@ionic/react';
import Header from '../components/Header'
import Nav from '../components/Nav'
import Main from '../components/Main'
import Footer from '../components/Footer'
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>David Sosa's Blog</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
        <Header/>
        <IonRow>
          <IonCol size='9'>
            <Main/>
          </IonCol>
          <IonCol size='3'>
            <Nav/>
          </IonCol>
        </IonRow>
        </IonGrid>
        <Footer/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
