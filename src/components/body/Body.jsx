import React from 'react';
import Topcategorie from './TopCategorie';
import Articlespopulaires from './ArticlesPopulaires';
import Meilleuresoffre from './MeilleuresOffre';
import Meilleurprofil from './MeilleurProfil';
const Body = () => {
    return (
        <div className="myBody">
        <Topcategorie/>
        <Articlespopulaires/>
        <Meilleuresoffre/>
        <Meilleurprofil/>
        </div>
    );
}

export default Body;
