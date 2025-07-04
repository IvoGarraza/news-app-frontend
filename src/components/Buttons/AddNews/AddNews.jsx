import React from "react";

const AddNews = () => {
  return (
    <button class="group flex flex-row bg-white text-red-500 py-2 rounded-full mr-4 p-6 transition-all hover:bg-black hover:text-white cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        class="size-6 mr-2 stroke-red-400 group-hover:stroke-green-400 group-hover:rotate-90 fill-none group-hover:fill-green-800 group-active:stroke-green-200 group-active:fill-green-600 group-active:duration-0 duration-300"
      >
        <path
          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
          stroke-width="1.5"
        ></path>
        <path d="M8 12H16" stroke-width="1.5"></path>
        <path d="M12 16V8" stroke-width="1.5"></path>
      </svg>
      Crear noticia
    </button>
  );
};

export default AddNews;
