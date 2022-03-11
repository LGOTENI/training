import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Topmarques = () => {
    return (
      <div>
        <div className="mx-[48px] my-8 flex justify-between">
          <div className="text-3xl font-bold ">Les tops marques</div>
        </div>
        <div class="flex justify-around my-4 mx-[48px]">
          <div className="my-auto">
            <div className="text-3xl text-green-500 cursor-pointer hover:text-green-600">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div>&nbsp;</div>
          </div>

          <div>
            <div class="w-52 h-24 box border-2 rounded-md border-green-500 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/882/882620.png?ga=GA1.1.1389423758.1646387486"
                alt=""
                srcset=""
                className="mx-auto h-24 py-2"
              />
            </div>
          </div>
          <div>
            <div class="w-52 h-24 box border-2 rounded-md border-green-500 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/882/882749.png?ga=GA1.2.1389423758.1646387486"
                alt=""
                srcset=""
                className="mx-auto h-24 py-2"
              />
            </div>
          </div>
          <div>
            <div class="w-52 h-24 box border-2 rounded-md border-green-500 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/882/882636.png?ga=GA1.2.1389423758.1646387486"
                alt=""
                srcset=""
                className="mx-auto h-24 py-2"
              />
            </div>
          </div>
          <div>
            <div class="w-52 h-24 box border-2 rounded-md border-green-500 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/882/882740.png?ga=GA1.1.1389423758.1646387486"
                alt=""
                srcset=""
                className="mx-auto h-24 py-2"
              />
            </div>
          </div>
          <div>
            <div class="w-52 h-24 box border-2 rounded-md border-green-500 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1210/1210402.png?ga=GA1.2.1389423758.1646387486"
                alt=""
                srcset=""
                className="mx-auto h-24 py-2"
              />
            </div>
          </div>
          <div>
            <div class="w-52 h-24 box border-2 rounded-md border-green-500 cursor-pointer">
              <img
                src="https://cdn-icons-png.flaticon.com/128/882/882726.png?ga=GA1.1.1389423758.1646387486"
                alt=""
                srcset=""
                className="mx-auto h-24 py-2"
              />
            </div>
          </div>
          <div className="my-auto">
            <div className=" text-3xl text-green-500 cursor-pointer hover:text-green-600">
              <FontAwesomeIcon icon={faChevronRight} id="titre" />
            </div>
            <div className="">&nbsp;</div>
          </div>
        </div>
      </div>
    );
}

export default Topmarques;
