import React from "react";
import logo from "../../images/logo (2).png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  
} from "@fortawesome/free-solid-svg-icons";


const Menu = () => {
  return (
    <header className="text-gray-600 body-font box border-solid shadow-xl px-16 py-1 ">
      <div className="container  mx-auto flex flex-wrap py-4 items-center gap-10 ">
        <div className="flex title-font font-medium items-center text-gray-900 mb-4">
          {/* Ici mon logo */}
          <img src={logo} alt="" srcset="" className="w-12 h-12" />
          <span className="text-xl pt-2">Cowema</span>
        </div>
        <nav className="mr-auto ml-4 py-1 pl-4  flex flex-wrap items-center text-base justify-center">
          <div className="relative">
            <div className="flex flex-wrap w-[600px]">
              <div className="inline-flex py-1 items-center px-2 text-lg text-black  rounded-l-lg border-2 border-r-0 border-green-500 cursor-pointer">
                <div className="text-xl border-r-2 pr-2 flex gap-2">
                  <div>
                    <select class="block appearance-none text-black focus:outline-none focus:bg-white cursor-pointer">
                      <option>Catégorie</option>
                      <option>Electronique</option>
                      <option>Beauté</option>
                    </select>
                  </div>

                  <div>
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      classNameName="text-red-400"
                    />
                  </div>
                </div>
              </div>
              <input
                type="search"
                id="website-admin"
                className="bg-white-50 border-r-0 text-xl border-l-0 border-2 border-green-500 text-black block flex-1 min-w-0 p-2.5 focus:outline-none focus:border-green-500 focus:ring-none focus:ring-green-50"
                placeholder="Rechercher un article spécifique"
              />

              <span className="inline-flex py-4 items-center px-6 text-sm text-white bg-green-500 rounded-r-lg border border-r-0 border-green-500 cursor-pointer hover:bg-green-600">
                <FontAwesomeIcon
                  icon={faSearch}
                  id="titre"
                  classNameName="text-gray-200"
                />
              </span>
            </div>
          </div>
        </nav>
        <div className="col-span-1 text-green-500 text-lg font-bold">
          Connexion
        </div>
        <div className="col-span-1 text-green-500 text-lg font-bold">
          Inscription
        </div>
        <button className="col-span-2 py-3 inline-flex items-center bg-green-500 px-3 hover:bg-green-600 rounded-lg text-lg text-white">
          Poster une annonce
        </button>
      </div>
    </header>
  );
};

export default Menu;
