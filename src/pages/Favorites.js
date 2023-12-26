import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/Meetups/MeetupList";

function FavoritesPage(){
const favoritesCtx=useContext(FavoritesContext);

    return <section>
      <h1>My favorites</h1>
      <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
    </section>;
    }
    
    export default FavoritesPage;