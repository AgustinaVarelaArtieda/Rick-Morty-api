import axios from 'axios';

export async function getFav(userId){
    try {
      const favorites=await axios.get(`/favorites/${userId}`)
      if(favorites.status===200){
        return favorites.data
      }else{
        alert('Ocurrio un error al traer favoritos!')
      }
    } catch (error) {
      console.log('error al traer favoritos en el front',error)
    }
  }

export async function addFav(userId,body){
    try {
      const response=await axios.post(`/favorites/add/${userId}`, body)
      if(response.status===200){
        alert('Agregado a favoritos!')
      }else{
        alert('Ocurrio un error al agregar a favoritos!')
      }
    } catch (error) {
      console.log('error al agregar favoritos en el front',error)
    }
  }

export async function removeFav(userId,id){
    try {
      const response=await axios.delete(`/favorites/rem/${userId}/${id}`)
      if(response.status===200){
        alert('Eliminado de favoritos!')
      }else{
        alert('Ocurrio un error al eliminar de favoritos!')
      }
    } catch (error) {
      console.log('error al eliminar favoritos en el front',error)
    }
  }