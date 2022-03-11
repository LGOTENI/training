import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Topcategorie = () => {
    return (
      <div>
        <div className="mx-[48px] my-6 flex justify-between">
          <div className="font-bold text-xl">Les tops catégories</div>
        </div>
        <div class="flex justify-around my-4 mx-[48]">
          <div className="my-auto">
            <div className="text-4xl text-green-500 cursor-pointer hover:text-green-600">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div>&nbsp;</div>
          </div>

          <div>
            <div class="border w-24 h-24 hover:fill-white hover:bg-green-600 cursor-pointer rounded-full flex items-center justify-center shadow-x bg-green-500">
              Catégories
            </div>
            <div className="mt-2">All categories</div>
          </div>
          <div>
            <div class="relative w-24 h-24 rounded-full cursor-pointer hover:shadow-sm hover:shadow-green-400">
              <img
                className="rounded-full border w-24 h-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/femme-appareils-menagers-blanc_1398-574.jpg?size=338&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-2">Electromenager</div>
          </div>
          <div className="text-center">
            <div class="relative w-24 h-24 rounded-full cursor-pointer hover:shadow-sm hover:shadow-green-400">
              <img
                className="rounded-full border w-24 h-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/portrait-studio-mode-fille-jolie-blonde-inhabituelle-perruque-courte-haut-blanc-jupe-sexy-posant-interieur-fond-jaune-emotions-positives-ensoleillees-lunettes-soleil-elegantes_273443-1140.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-2">Vetement</div>
          </div>
          <div>
            <div class="relative w-24 h-24 rounded-full cursor-pointer hover:shadow-sm hover:shadow-green-400">
              <img
                className="rounded-full border h-24 w-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/blocs-icones-medias-sociaux-ordinateur-portable-fond-bleu_23-2147841214.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-2">Electronique</div>
          </div>
          <div className="text-center">
            <div class="relative w-24 h-24 rounded-full cursor-pointer hover:shadow-sm hover:shadow-green-400">
              <img
                className="rounded-full border h-24 w-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/belle-fille-du-maquillage-colore_144627-8208.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
              {/* <div class="absolute top-0 right-0 h-6 w-6 my-1 border-4 border-white rounded-full bg-gray-300 z-2"></div> */}
            </div>
            <div className="mt-2">Beauté</div>
          </div>
          <div>
            <div class="relative w-24 h-24 rounded-full cursor-pointer hover:shadow-sm hover:shadow-green-400">
              <img
                className="rounded-full border h-24 w-24 border-gray-100 shadow-sm"
                src="https://img.freepik.com/photos-gratuite/modele-maison-villa-cle-dessin-retro-bureau-concept-vente-immobilier_1387-310.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt=""
              />
            </div>
            <div className="mt-2">Immobilier</div>
          </div>
          <div className="my-auto">
            <div className=" text-4xl text-green-500 cursor-pointer hover:text-green-600">
              <FontAwesomeIcon icon={faChevronRight} id="titre" />
            </div>
            <div className="">&nbsp;</div>
          </div>
        </div>
      </div>
    );
}

export default Topcategorie;
