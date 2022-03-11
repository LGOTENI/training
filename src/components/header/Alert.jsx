import React, {useState} from 'react';


const Alert = () => {

    const [alert, setAlert]= useState(true)

    return (
      <div
        className={
          alert ? "" : "hidden transition delay-150 duration-300 ease-in-out"
        }
      >
        <div
          class="bg-orange-500 text-red-700 px-16 py-6 sticky top-0"
          role="alert"
        >
          <span class="block text-white font-extrabold text-4xl">
            PROFITEZ DE LA LIVRAISON GRATUITE SUR
          </span>
          <div>

          </div>
          
          <span
            class="absolute top-0 bottom-0 right-0 my-8 mr-4"
            onClick={(e) => setAlert(!alert)}
          >
            <svg
              class="fill-current h-6 w-6 text-white"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Fermer</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      </div>
    );
};

export default Alert;
