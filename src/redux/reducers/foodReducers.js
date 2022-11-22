import { foodTypes, restaurantTypes } from "../types/foodType";

const initialState = {
    food: [],
};

export const foodReducers = (state = initialState, action) =>{
switch (action.type) {
    case foodTypes.FOOD_GET:
        return{
            ...state,
            food: action.payload.food,
        };
        case foodTypes.FOOD_ADD:
            return{
                ...state,
                food:  [...state.food, action.payload]
            };
            case foodTypes.FOOD_FILTERED:
                return{
                    ...state,
                    food: action.payload.food,
                };

    default:
        return state;
}

};

const restaurantState = {
    restaurant: [],
};

export const restaurantReducers = (state = restaurantState, action) =>{
switch (action.type) {
    case restaurantTypes.RESTAURANT_GET:
        return{
            ...state,
            restaurant: action.payload.restaurant,
        };
        case restaurantTypes.RESTAURANT_ADD:
            return{
                ...state,
                restaurant:  [...state.restaurant, action.payload]
            };
            case restaurantTypes.RESTAURANT_FILTERED:
                return{
                    ...state,
                    restaurant: action.payload.restaurant,
                };
        

    default:
        return state;
}

};