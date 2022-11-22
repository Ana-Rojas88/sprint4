import { addDoc, collection, getDocs, where,query } from "firebase/firestore";
import { dataBase } from "../../firebase/firebaseConfig";
import { foodTypes } from "../types/foodType";

const collectionName = "food";


export const actionGetFoodAsync = () =>{
    return async (dispatch) => {
        const foodCollection = collection(dataBase, collectionName);
        const querySnapshot = await getDocs(foodCollection);
        const food = [];
        try {
            querySnapshot.forEach((doc)=>{
                food.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
        } catch (error) {
            console.error(error);
        }finally{
            dispatch(actionGetFoodSync(food));
        }
     };
    };

    const actionGetFoodSync = (food) =>{
        return{
            type: foodTypes.FOOD_GET,
            payload:{
                food: food,
            },
        };
    };

    export const actionAddFoodAsync = (food) =>{
        return async (dispatch) =>{
            try {
                const foodCollection = collection(dataBase, collectionName);
                const docs = await addDoc(foodCollection, food);
                dispatch(actionAddFoodSync({id: docs.id, ...food}));
            } catch (error) {
                console.log(error);
                dispatch(actionAddFoodSync({}));
            }
        }
    }

    const actionAddFoodSync = (food) =>{
        return {
            type: foodTypes.FOOD_ADD,
            payload: food,
        };
    };

    export const actionFilterFoodAsync = (searchParam, searchValue) => {
        return async (dispatch) =>{
            const foodCollection = collection(dataBase, collectionName);
            const q = query(foodCollection, where(searchParam, "==", searchValue));
            const food = [];
            try {
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) =>{
                    food.push({
                        id: doc.id,
                        ...doc.data(),
                    });
                });
            } catch (error) {
                console.log(error);
            }finally{
                dispatch(actionFilterFoodSync(food))
            }
        };
    };

    const actionFilterFoodSync = (food) => {
        return{
            type: foodTypes.FOOD_FILTERED,
            payload: {
                food: food,
            },
        };
    };

    export const actionFilterAsync = (searchParam) => {
        return async (dispatch) => {
          const foodCollection = collection(dataBase, collectionName);
          const querySnapshot = await getDocs(foodCollection);
          const food = [];
          try {
            querySnapshot.forEach((doc) => {
              food.push({
                id: doc.id,
                ...doc.data(),
              });
            });
        
            const filterdFood = food.filter((item) =>
              item.name.toLowerCase().includes(searchParam.toLowerCase())
            );
            dispatch(actionFilterFoodSync(filterdFood));
          } catch (error) {
            console.error(error);
            dispatch(actionFilterFoodSync([]));
          }
        };
      };
      

     