
function get_nombre(nombre)
{
  return nombre;
}
function get_genero(genero , edad)
{
  if(edad>=30)
  {
    if( genero=="Femenino" )
    {
      return "Sra";
    }
    else if(genero=="Masculino" )
    {
      return "Sr";
    }
  }
  else{
    if( genero=="Femenino" )
    {
      return "Srita";
    }
    else if(genero=="Masculino" )
    {
      return "Joven";
    }
  }
}
 function get_hora_Idioma(idioma)
 {
    let fechaActual = new Date();
    let horaActual = fechaActual.getHours();
    if(idioma=="Es")
    {
      if(horaActual<12)
      {
        return "Buenos Dias";
      }
      if (horaActual >12 && horaActual <18)
      {
        return  "Buenas tardes";
      }
      if(horaActual >18 && horaActual <24)
      {
        return "Buenas Noches";
      }
    }
    else{
      if(horaActual<12)
      {
        return "Good Morning";
      }
      if (horaActual >12 && horaActual <18)
      {
        return  "Good Afternoon";
      }
      if(horaActual >18 && horaActual <24)
      {
        return "Good Night";
      }
    }
   


 }

  export {get_nombre,get_genero,get_hora_Idioma};
  