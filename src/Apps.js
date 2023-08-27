
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
  export {get_nombre,get_genero};
  