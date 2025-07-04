import React from "react";

const DeleteNews = () => {
  return (
    <button className="flex flex-row bg-white text-red-500 py-2 rounded-full mr-4 p-6 transition-all hover:bg-black hover:text-white cursor-pointer">
      <svg
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-5 w-5 mr-2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
        ></path>
      </svg>
      Eliminar noticia
    </button>
  );
};

export default DeleteNews;
