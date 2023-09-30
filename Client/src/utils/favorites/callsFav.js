import axios from 'axios';

export async function getFav(userId){
  const token = localStorage.getItem('token');
    try {
      const favorites=await axios.get(`/favorites/${userId}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      if(favorites.status===200){
        return favorites.data[0].Favorites
      }else{
        alert('Ocurrio un error al traer favoritos!')
      }
    } catch (error) {
      console.log('error al traer favoritos en el front',error)
    }
  }

export async function addFav(userId,body){
    try {
      const token = localStorage.getItem('token');
      const response=await axios.post(`/favorites/add/${userId}`, body,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
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
      const token = localStorage.getItem('token');
      const response=await axios.delete(`/favorites/rem/${userId}/${id}`,{
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
      if(response.status===200){
        alert('Eliminado de favoritos!')
      }else{
        alert('Ocurrio un error al eliminar de favoritos!')
      }
    } catch (error) {
      console.log('error al eliminar favoritos en el front',error)
    }
  }