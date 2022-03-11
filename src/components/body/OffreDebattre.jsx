import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt, faHeart, faSms } from "@fortawesome/free-solid-svg-icons";

const Offredebattre = () => {
    return (
      <div className="px-12 mb-8">
        <div>
          <div className="text-3xl font-bold mb-6">
            Les meilleurs offres près à debattre
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-1 rounded-lg shadow-lg">
              <div className="relative h-56 mb-4">
                <img
                  src="https://img.freepik.com/photos-gratuite/ecran-lumineux-vide-personne-tenant-telephone-mobile_53876-98458.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                  alt="item"
                  srcset=""
                  className=" cover-full h-full w-full rounded-t-lg shadow-lg"
                />
                <div className="absolute top-0 mr-6 px-2 right-0 rounded-b-md bg-green-400 z-2">
                  A débattre
                </div>
              </div>
              <div className="m-4">
                <span className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem
                </span>
                <div className="flex flex-wrap justify-between my-2">
                  <span className="col-span-2 uppercase font-extrabold text-lg">
                    2500 f fca
                  </span>
                  <span className=" uppercase text-gray-400 font-extrabold line-through text-lg">
                    &nbsp; 2500 f cfa &nbsp;
                  </span>
                </div>
                <div className="flex flex-wrap justify-between border-b-2 pb-3 border-gray-400">
                  <div className="text-gray-400">
                    vendu par &nbsp;
                    <span className="text-green-500">Marnyx</span>
                  </div>
                  <div className="text-gray-400">15</div>
                </div>
                <div className="flex flex-wrap gap- justify-between">
                  <button className="mt-2 px-4 bg-orange-500 rounded-sm text-white py-3 text-xl hover:bg-orange-600">
                    Faire une offre
                  </button>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faHeart} id="titre" />
                  </div>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faShareAlt} id="titre" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-lg">
              <div className="relative h-56 mb-4">
                <img
                  src="https://img.freepik.com/photos-gratuite/boites-emballage-sac-dans-panier-ordinateur-portable-pour-concept-magasinage-livraison-ligne_38716-138.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                  alt="item"
                  srcset=""
                  className=" cover-full h-full w-full rounded-t-lg shadow-lg"
                />
                <div className="absolute top-0 mr-6 px-2 right-0 rounded-b-md bg-red-500 z-2">
                  Stock épuisé
                </div>
              </div>
              <div className="m-4">
                <span className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem
                </span>
                <div className="flex flex-wrap justify-between my-2">
                  <span className="col-span-2 uppercase font-extrabold text-lg">
                    2500 f fca
                  </span>
                  <span className=" uppercase text-gray-400 font-extrabold line-through text-lg">
                    &nbsp; 2500 f cfa &nbsp;
                  </span>
                </div>
                <div className="flex flex-wrap justify-between border-b-2 pb-3 border-gray-400">
                  <div className="text-gray-400">
                    vendu par &nbsp;
                    <span className="text-green-500">Marnyx</span>
                  </div>
                  <div className="text-gray-400">15</div>
                </div>
                <div className="flex flex-wrap gap- justify-between">
                  <button className="mt-2 px-4 bg-green-500 rounded-sm text-white py-3 text-xl hover:bg-green-600">
                    Acheter
                  </button>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faHeart} id="titre" />
                  </div>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faShareAlt} id="titre" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-lg">
              <div className="relative h-56 mb-4">
                <img
                  src="https://img.freepik.com/psd-gratuit/maquette-logo-brode-sweat-capuche_145275-152.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486"
                  alt="item"
                  srcset=""
                  className=" cover-full h-full w-full rounded-t-lg shadow-lg"
                />
                <div className="absolute top-0 mr-6 px-2 right-0 rounded-b-md bg-green-400 z-2">
                  A débattre
                </div>
              </div>
              <div className="m-4">
                <span className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem
                </span>
                <div className="flex flex-wrap justify-between my-2">
                  <span className="col-span-2 uppercase font-extrabold text-lg">
                    2500 f fca
                  </span>
                  <span className=" uppercase text-gray-400 font-extrabold line-through text-lg">
                    &nbsp; 2500 f cfa &nbsp;
                  </span>
                </div>
                <div className="flex flex-wrap justify-between border-b-2 pb-3 border-gray-400">
                  <div className="text-gray-400">
                    vendu par &nbsp;
                    <span className="text-green-500">Marnyx</span>
                  </div>
                  <div className="text-gray-400">15</div>
                </div>
                <div className="flex flex-wrap gap- justify-between">
                  <button className="mt-2 px-4 bg-orange-500 rounded-sm text-white py-3 text-xl hover:bg-orange-600">
                    Faire une offre
                  </button>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faHeart} id="titre" />
                  </div>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faShareAlt} id="titre" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 rounded-lg shadow-lg">
              <div className="relative h-56 mb-4">
                <img
                  src="https://img.freepik.com/photos-gratuite/homme-ouvrant-gros-plan-du-tronc_23-2148238224.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                  alt="item"
                  srcset=""
                  className=" cover-full h-full w-full rounded-t-lg shadow-lg"
                />
                <div className="absolute top-0 mr-6 px-2 right-0 rounded-b-md bg-green-400 z-2">
                  A débattre
                </div>
              </div>
              <div className="m-4">
                <span className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Voluptatem
                </span>
                <div className="flex flex-wrap justify-between my-2">
                  <span className="col-span-2 uppercase font-extrabold text-lg">
                    2500 f fca
                  </span>
                  <span className=" uppercase text-gray-400 font-extrabold line-through text-lg">
                    &nbsp; 2500 f cfa &nbsp;
                  </span>
                </div>
                <div className="flex flex-wrap justify-between border-b-2 pb-3 border-gray-400">
                  <div className="text-gray-400">
                    vendu par &nbsp;
                    <span className="text-green-500">Marnyx</span>
                  </div>
                  <div className="text-gray-400">15</div>
                </div>
                <div className="flex flex-wrap gap- justify-between">
                  <button className="mt-2 px-4 bg-orange-500 rounded-sm text-white py-3 text-xl hover:bg-orange-600">
                    Faire une offre
                  </button>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faHeart} id="titre" />
                  </div>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faSms} id="titre" />
                  </div>
                  <div className="my-auto text-green-500">
                    <FontAwesomeIcon icon={faShareAlt} id="titre" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Offredebattre;
