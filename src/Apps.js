
function get_nombre(nombre)
{
  return nombre;
}
function get_genero(genero)
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
  export {get_nombre,get_genero};
  