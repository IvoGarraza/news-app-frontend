import React from 'react'

const MainSection = () => {
  return (
    <div class="cards-container w-full h-full grid grid-cols-3 gap-0 grid-rows-3">
    {/* <!-- noticia principal --> */}
    <div class="main-card col-span-2 row-span-4 flex flex-col justify-around items-center pr-12"
      >
        <div class="main-card-header w-full h-1/6 flex flex-col justify-center">
            <h5  class="font-bold w-fit border-1 px-4 rounded-xl">asdasd</h5>
            <h2 class="text-4xl font-bold">titulo</h2>
        </div>
        <div class="main-card-image w-full h-4/6">
            <img src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=200&fit=crop' class="w-full h-full object-cover" alt='main-img'/>
        </div>
        <div class="main-card-content h-1/6 w-full flex flex-col items-start justify-start">
            <div class="flex flex-row w-full justify-between text-slate-500 font-light">
                <span>Autor: </span>
                <span>Actualizado: </span>
            </div>
            <h3 class="text-lg font-medium">Subtitulo</h3>
        </div>
    </div>

{/*  /*    <!-- noticias laterales --> */ }
    <div class="side-cards col-span-1 row-span-3 grid grid-cols-1 grid-rows-3 gap-2 p-2 w-full h-full">
        <div
        class="card w-full h-full flex flex-row items-center rounded-xl p-4 cursor-pointer ransition-all scale-100 hover:scale-101 hover:shadow-md"
        
            
>
            <div class="card-header w-1/2 h-full flex flex-col justify-center">
                <h5 class="text-xs">Categoria</h5>
                <h3 class="text-md font-bold">titulo</h3>
                <span class="text-xs">titulo</span>
            </div>
            <div class="card-image w-1/2 h-full overflow-hidden object-cover">
                <img src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&h=200&fit=crop' class="w-full h-full object-cover rounded-xl" alt='card-img'/>
            </div>
        </div>
    </div>
</div>
  )
}

export default MainSection