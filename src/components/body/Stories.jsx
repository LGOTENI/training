import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";


const Stories = () => {
    return (
      <div className="px-16">
        <div className="my-8">
          <div className="text-3xl ">
            Les stories des articles vendus sur Cowema
          </div>
        </div>

        <div className="flex gap-4 justify-between mx-[48]">
          <div className=" col-span-1 my-auto">
            <div className="text-3xl text-green-500 cursor-pointer hover:text-green-600">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div>&nbsp;</div>
          </div>
          <div className="col-span-2 relative h-[310px] w-52 mb-4 border-2 border-green-500 rounded-md">
            <div className='text-center mt-28 text-green-500 text-5xl'>
              <FontAwesomeIcon icon={faPlusCircle} id="titre" />
            </div>
            <div className=" border-t-2 w-full border-green-500 py-2 absolute bottom-0 text-black">
              <div className="ml-12">Create Story</div>
            </div>
          </div>
          <div className="col-span-2 relative h-[310px] w-52 mb-4">
            <img
              src="https://img.freepik.com/photos-gratuite/portrait-mode-plein-air-elegante-femme-decontractee-chapeau-noir-costume-rose-chemisier-blanc-posant-vieille-rue_273443-1186.jpg?size=338&ext=jpg&ga=GA1.2.1389423758.1646387486"
              alt="item"
              srcset=""
              className=" cover-full h-full w-full rounded-md shadow-md"
            />
            <div className="flex flex-wrap gap-1 absolute top-0 mt-2 px-2 left-0 z-2">
              <div className="">
                <img
                  src="https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612"
                  alt=""
                  srcset=""
                  className="rounded-full border w-12 h-12"
                />
              </div>
              <span className="text-white">Lepress K.</span>
            </div>
            <div className="flex flex-wrap gap-1 absolute bottom-0 text-white mt-2 px-2 left-0 z-2">
              See behond
            </div>
          </div>
          <div className="col-span-2 relative h-[310px] w-52 mb-4">
            <img
              src="https://img.freepik.com/photos-gratuite/portrait-magnifique-belle-femme-brune-sexy-corps-parfait-vetu-maillot-bain-jaune_149155-4723.jpg?size=338&ext=jpg&ga=GA1.1.1389423758.1646387486"
              alt="item"
              srcset=""
              className=" cover-full h-full w-full rounded-md shadow-md"
            />
            <div className="flex flex-wrap gap-1 absolute top-0 mt-2 px-2 left-0 z-2">
              <div className="">
                <img
                  src="https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612"
                  alt=""
                  srcset=""
                  className="rounded-full border w-12 h-12"
                />
              </div>
              <span className="text-white">Lepress K.</span>
            </div>
            <div className="flex flex-wrap gap-1 absolute bottom-0 text-white mt-2 px-2 left-0 z-2">
              See behond
            </div>
          </div>
          <div className="col-span-2 relative w-52 h-[310px] mb-4">
            <img
              src="https://img.freepik.com/photos-gratuite/belle-jeune-femme-regardant-camera-isolee-fond-blanc_100800-10031.jpg?size=338&ext=jpg&ga=GA1.1.1389423758.1646387486"
              alt="item"
              srcset=""
              className=" cover-full h-full w-full rounded-md shadow-md"
            />
            <div className="flex flex-wrap gap-1 absolute top-0 mt-2 px-2 left-0 z-2">
              <div className="">
                <img
                  src="https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612"
                  alt=""
                  srcset=""
                  className="rounded-full border w-12 h-12"
                />
              </div>
              <span className="text-white">Lepress K.</span>
            </div>
            <div className="flex flex-wrap gap-1 absolute bottom-0 text-white mt-2 px-2 left-0 z-2">
              See behond
            </div>
          </div>
          <div className="col-span-2 relative w-52 h-[310px] mb-4">
            <img
              src="https://img.freepik.com/photos-gratuite/guy-worldface-espagnol-dans-fond-blanc_53876-137665.jpg?size=338&ext=jpg&ga=GA1.2.1389423758.1646387486"
              alt="item"
              srcset=""
              className=" cover-full h-full w-full rounded-md shadow-md"
            />
            <div className="flex flex-wrap gap-1 absolute top-0 mt-2 px-2 left-0 z-2">
              <div className="">
                <img
                  src="https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612"
                  alt=""
                  srcset=""
                  className="rounded-full border w-12 h-12"
                />
              </div>
              <span className="text-white">Lepress K.</span>
            </div>
            <div className="flex flex-wrap gap-1 absolute bottom-0 text-white mt-2 px-2 left-0 z-2">
              See behond
            </div>
          </div>
          <div className="col-span-2 relative w-52 h-[310px] mb-4">
            <img
              src="https://img.freepik.com/photos-gratuite/portrait-mode-plein-air-elegante-femme-decontractee-chapeau-noir-costume-rose-chemisier-blanc-posant-vieille-rue_273443-1186.jpg?size=338&ext=jpg&ga=GA1.2.1389423758.1646387486"
              alt="item"
              srcset=""
              className=" cover-full h-full w-full rounded-md shadow-md"
            />
            <div className="flex flex-wrap gap-1 absolute top-0 mt-2 px-2 left-0 z-2">
              <div className="">
                <img
                  src="https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612"
                  alt=""
                  srcset=""
                  className="rounded-full border w-12 h-12"
                />
              </div>
              <span className="text-white">Lepress K.</span>
            </div>
            <div className="flex flex-wrap gap-1 absolute bottom-0 text-white mt-2 px-2 left-0 z-2">
              See behond
            </div>
          </div>
          <div className="col-span-2 relative w-52 h-[310px] mb-4">
            <img
              src="https://img.freepik.com/photos-gratuite/bel-homme-presentant-quelque-chose_1368-87.jpg?size=338&ext=jpg&ga=GA1.2.1389423758.1646387486"
              alt="item"
              srcset=""
              className=" cover-full h-full w-full rounded-md shadow-md"
            />
            <div className="flex flex-wrap gap-1 absolute top-0 mt-2 px-2 left-0 z-2">
              <div className="">
                <img
                  src="https://media.gettyimages.com/photos/beauty-portrait-of-young-woman-picture-id1309405076?s=612x612"
                  alt=""
                  srcset=""
                  className="rounded-full border w-12 h-12"
                />
              </div>
              <span className="text-white">Lepress K.</span>
            </div>
            <div className="flex flex-wrap gap-1 absolute bottom-0 text-white mt-2 px-2 left-0 z-2">
              See behond
            </div>
          </div>
          <div className="col-span-1 my-auto float-right">
            <div className=" text-3xl text-green-500 cursor-pointer hover:text-green-600 float-right">
              <FontAwesomeIcon icon={faChevronRight} id="titre" />
            </div>
            <div className="">&nbsp;</div>
          </div>
        </div>
      </div>
    );
}

export default Stories;
