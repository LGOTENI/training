import React from "react";
import Topcategorie from "./TopCategorie";
import Articlespopulaires from "./ArticlesPopulaires";
import Meilleuresoffre from "./MeilleuresOffre";
import Meilleurprofil from "./MeilleurProfil";
import Topmarques from "./TopMarques";
import Blackfriday from "./BlackFriday";
import Meilleursoffrescowema from "./MeilleursOffresCowema";
import Stories from "./Stories";
import Annonces from "./Annonces";
import Offredebattre from "./OffreDebattre";
import Howtowork from "./HowToWork";

const Body = () => {
  return (
    <div className="myBody">
      <Topcategorie />
      <Articlespopulaires />
      <Meilleuresoffre />
      <Topmarques />
      <Blackfriday />
      <Meilleursoffrescowema />
      <Meilleurprofil />
      <Stories/>
      <Annonces/>
      <Offredebattre/>
      <Howtowork/>
    </div>
  );
};

export default Body;
