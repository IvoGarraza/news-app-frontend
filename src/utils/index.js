export const ColorBackgroundSelector = (category) => {
    switch (category) {
      case "Noticias":
        return "rojo";
      case "Tecnología":
        return "azul";
      case 'Deportes':
        return "verde"
      case 'Ciencia':
        return 'celeste';
      case 'Política':
        return 'rojo';
      case 'Salud':
        return 'amarillo';
      case 'Entretenimiento':
        return 'rosa';
      default:
        break;
    }
  };

  export const Fondo = (category) => {
    switch (category) {
      case "Noticias":
        return "rojo.light";
      case "Tecnología":
        return "azul.light";
      case 'Deportes':
        return "verde.light"
        case 'Ciencia':
          return 'celeste.light';
      default:
        break;
    }
  };


export const ColorTextSelector = (category) => {
    switch (category) {
        case 'Tecnología':
          return 'text-blue-600';
        case 'Ciencia':
          return 'text-sky-600';
        case 'Deportes':
          return 'text-green-500';
        case 'Política':
          return 'text-red-600';
        case 'Entretenimiento':
          return 'text-pink-500';
        case 'Salud':
          return 'text-yellow-600';
        case 'Economía':
          return 'text-blue-600';
        default:
          return 'text-red-700';
      }
}

export const ColorSelector = (category) => {
  return {
    background: ColorBackgroundSelector(category),
    text: ColorTextSelector(category),
    color:Fondo(category),
  };
};
