import React from "react";

const Articlespopulaires = () => {
  return (
    <div className="px-12 my-8">
      <div className="bg-green-100 rounded-md p-4">
        <div className="text-3xl font-bold text-center mb-6">
          Les articles les plus populaires
        </div>
        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-1 border-2 text-center border-green-500 rounded-md bg-white">
            <div className="relative h-72">
              <img
                className="object-contain w-full h-full"
                src="https://www.presse-citron.net/app/uploads/2019/09/iphone-11-apple.jpg"
                alt="apple"
              />
            </div>

            <div className="px-12 my-4">
              <h5 className="mt-4 text-lg text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
                deleniti
              </h5>
              <button className="mt-2 bg-green-500 w-full rounded-sm text-white py-3 text-xl hover:bg-green-600">
                Acheter
              </button>
            </div>
          </div>
          <div className="col-span-1 border-2 text-center border-green-500 rounded-md bg-white">
            <div className="relative h-72">
              <div className="bg-green-500 rounded-br-md rounded-bl-md w-28 top-0 float-right mr-8 text-white">
                A débattre
              </div>
              <img
                className="object-contain w-full h-full"
                src="https://img.freepik.com/photos-gratuite/pile-t-shirt-polo_74190-2482.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt="apple"
              />
            </div>

            <div className="px-12 my-4">
              <h5 className="mt-4 text-lg text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
                deleniti
              </h5>
              <button className="mt-2 bg-orange-500 w-full rounded-sm text-white py-3 text-xl hover:bg-orange-600">
                Faire une offre
              </button>
            </div>
          </div>
          <div className="col-span-1 border-2 text-center border-green-500 rounded-md bg-white">
            <div className="relative h-72">
              <img
                className="object-contain w-full h-full"
                src="https://img.freepik.com/photos-gratuite/savoureuse-pizza-ingredients-isoles-blanc_185193-20017.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt="apple"
              />
            </div>

            <div className="px-12 my-4">
              <h5 className="mt-4 text-lg text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
                deleniti
              </h5>
              <button className="mt-2 bg-green-500 w-full rounded-sm text-white py-3 text-xl hover:bg-green-600">
                Acheter
              </button>
            </div>
          </div>
          <div className="col-span-1 border-2 text-center border-green-500 rounded-md bg-white">
            <div className="relative h-72">
              <div className="bg-green-500 rounded-br-md rounded-bl-md w-28 top-0 float-right mr-8 text-white">
                A débattre
              </div>
              <img
                className="object-contain w-full h-full"
                src="https://img.freepik.com/photos-gratuite/pile-t-shirt-polo_74190-2482.jpg?size=626&ext=jpg&ga=GA1.2.1389423758.1646387486"
                alt="apple"
              />
            </div>

            <div className="px-12 my-4">
              <h5 className="mt-4 text-lg text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde
                deleniti
              </h5>
              <button className="mt-2 bg-orange-500 w-full rounded-sm text-white py-3 text-xl hover:bg-orange-600">
                Faire une offre
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articlespopulaires;
