import { addDoc, collection, getDocs, where,query } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { restaurantTypes } from "../types/foodType";

const collectionRestaurant = "restaurant";

export const actionGetRestaurantAsync = () =>{
    return async (dispatch) => {
        const restaurantCollection = collection(dataBase, collectionRestaurant);
        const querySnapshot = await getDocs(restaurantCollection);
        const restaurant = [];
        try {
            querySnapshot.forEach((doc)=>{
                restaurant.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        
        } catch (error) {
            console.error(error);
        }finally{
            dispatch(actionGetRestaurantSync(restaurant));
        }
     };
    };

    const actionGetRestaurantSync = (restaurant) =>{
        return{
            type: restaurantTypes.RESTAURANT_GET,
            payload:{
                restaurant: restaurant,
            },
        };
    };


    export const actionAddRestaurantAsync = (restaurant) => {
        return async (dispatch) => {
          try {
            const restaurantCollection = collection(dataBase, collectionRestaurant);
            const docs = await addDoc(restaurantCollection, restaurant);
            dispatch(actionAddRestaurantSync({ id: docs.id, ...restaurant }));
          } catch (error) {
            console.log(error);
            dispatch(actionAddRestaurantSync({}));
          }
        };
      };
      
      const actionAddRestaurantSync = (restaurant) => {
        return {
          type: restaurantTypes.RESTAURANT_ADD,
          payload: restaurant,
        };
      };
      


export const actionFilterRestaurantAsync = (searchParam, searchValue) => {
    return async (dispatch) =>{
        const restaurantCollection = collection(dataBase, collectionRestaurant);
        const q = query(restaurantCollection, where(searchParam, "==", searchValue));
        const restaurant = [];
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) =>{
                restaurant.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        } catch (error) {
            console.log(error);
        }finally{
            dispatch(actionFilterRestaurantSync(restaurant))
        }
    };
};

const actionFilterRestaurantSync = (restaurant) => {
    return{
        type: restaurantTypes.RESTAURANT_FILTERED,
        payload: {
            restaurant: restaurant,
        },
    };
};

