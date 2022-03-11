import React from "react";
import { Carousel } from "react-carousel-minimal";
import image1 from "../../images/Image1.png"
import image2 from "../../images/Image2.png"
import image3 from "../../images/Groupe 6.png"
import image4 from "../../images/Rectangle 5.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockFour,
  faTruckFast,
  faIndustry,
  faCreditCardAlt
  
} from "@fortawesome/free-solid-svg-icons";


const Banniere = () => {
      const data = [
        {
          image:
            "https://img.freepik.com/photos-gratuite/prise-vue-studio-femme-afro-americaine-positive-pointe-du-doigt-pour-copier-espace-au-dessus-excitee-par-bonnes-informations-sourit-agreablement-porte-veste-jaune-se-tient-dans-trou-papier-dechire_273609-33954.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
        },
        {
          image:
            "https://cdn.stocksnap.io/img-thumbs/280h/iphone-device_WR9GMT3HBF.jpg",
        },
        {
          image:
            "https://img.freepik.com/photos-gratuite/boites-colis-papier-logo-panier-achat-dans-chariot-clavier-ordinateur-portable_9635-3215.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486",
        },
        {
          image:
            "https://img.freepik.com/photos-gratuite/beaucoup-vetements-differents-suspendus-dans-armoire_181624-10996.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
        },
        {
          image:
            "https://cache.magicmaman.com/data/photo/w1000_ci/5y/petite-fille-qui-sourit2.jpg ",
        },
        {
          image:
            "https://img.freepik.com/photos-gratuite/jeune-fille-tient-produit-nettoyage-gants-chiffons-dans-bassin-mur-blanc_1150-21780.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
        },
        {
          image:
            "https://img.freepik.com/photos-gratuite/grande-vente-conseil-vente-prix-reduit-dans-centre-commercial-departement-vetements-espace-copie_116547-15811.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
        },
        {
          image:
            "https://img.freepik.com/photos-gratuite/excite-femme-africaine-tenant-sacs-provisions-telephone-mobile_171337-14029.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
        },
        {
          image:
            "https://img.freepik.com/photos-gratuite/ventes-au-detail-cyber-monday_23-2148688493.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486",
        },
      ];
      const captionStyle = {
        fontSize: "2em",
        fontWeight: "bold",
      };
      const slideNumberStyle = {
        fontSize: "20px",
        fontWeight: "bold",
      };
  return (
    <div className="flex flex-row px-16 gap-4 my-4">
      <div className="basis-3/5 bg-[#E9F9F2]">
        <div className="box border-solid shadow-xl rounded-xl ">
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="390px"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            style={{
              textAlign: "center",
            }}
          />
        </div>
        <div className="">
          <div className="grid grid-cols-4 gap-4 mx-4 my-4">
            <div className="col-span-1">
              <div className="grid grid-cols-4 h-16 border-2 border-white rounded-sm bg-white text-[#FF9D00]">
                <div className="col-span-1 my-auto mx-auto text-3xl ">
                  <FontAwesomeIcon icon={faTruckFast} id="titre" />
                </div>
                <div className="col-span-3">
                  <div className="text-[10px] font-bold">Free shipping</div>
                  <div className="text-[10px]">Free shipping in all Congo</div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid h-16 grid-cols-4 border-2 border-white rounded-md bg-white text-[#FF9D00]">
                <div className="col-span-1 my-auto mx-auto text-3xl ">
                  <FontAwesomeIcon icon={faClockFour} id="titre" />
                </div>
                <div className="col-span-3">
                  <div className="text-[12px] font-bold">24/7 services</div>
                  <div className="text-[10px]">
                    Contact us 24 hours a days 7 days a week
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-4 h-16 border-2 border-white rounded-md bg-white text-[#FF9D00]">
                <div className="col-span-1 my-auto mx-auto text-3xl ">
                  <FontAwesomeIcon icon={faIndustry} id="titre" />
                </div>
                <div className="col-span-3">
                  <div className="text-[12px] font-bold">30 days return</div>
                  <div className="text-[10px]">Free shipping in all Congo</div>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-4 h-16 border-2 border-white rounded-md bg-white text-[#FF9D00]">
                <div className="col-span-1 my-auto mx-auto text-3xl ">
                  <FontAwesomeIcon icon={faCreditCardAlt} id="titre" />
                </div>
                <div className="col-span-3">
                  <div className="text-[12px] font-bold">
                    100% payement secure
                  </div>
                  <div className="text-[10px]">Free shipping in all Congo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-2/5 ">
        <div className="grid grid-cols-2 gap-2 h-full">
          <div className="col-span-1">
            <img
              src={image4}
              alt=""
              className="lg:h-60 md:h-36 w-full object-cover object-center box border-solid shadow-xl"
            />
          </div>
          <div className="col-span-1">
            <img
              src={image1}
              alt=""
              className="w-full lg:h-60 md:h-36 object-cover object-center"
            />
          </div>
          <div className="col-span-1 h-full">
            <img
              src={image2}
              alt=""
              className="w-full lg:h-60 md:h-36 object-cover object-center box border-solid"
            />
          </div>
          <div className="col-span-1 h-full lg:h-60 md:h-36 ">
            <img
              src="https://img.freepik.com/photos-gratuite/dispositifs-techniques-icones-connectes-planete-terre-numerique_117023-449.jpg?size=626&ext=jpg&ga=GA1.1.1389423758.1646387486"
              alt=""
              className="objet-cover cover-full h-full w-full object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banniere;
