function convertDoubleSpaceToSingle(str) {
    //le indico al separador del split que después de cada doble espacio se separe.
    let divide = str.split("  ");
    //uno el nuevo arreglo, que dio el split, y lo uno con un espacio.
    return divide.join(" ");
  }
  
  console.log(convertDoubleSpaceToSingle);
  