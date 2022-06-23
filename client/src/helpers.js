

export function getItemById(data, id){
   if(!data ) return null;
   return data.find((item) => item.id == id);
}