import { foodTypes, orderTypes, restaurantTypes } from "../types/foodType";

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
                case foodTypes.FOOD_DELETE:
            return{
                ...state,
                food: state.food.filter((food) => 
                    food.id !== action.payload.id
                ) 
            }

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
                case restaurantTypes.RESTAURANT_DELETE:
                    return{
                        ...state,
                        restaurant: state.restaurant.filter((restaurant) => 
                            restaurant.id !== action.payload.id
                        ) 
                    }
        

    default:
        return state;
}

};


const orderState = {
    order: []
}

export const orderReducer = (state = orderState, action) => {
    switch (action.type) {
        case orderTypes.ORDER_ADD:
            return {
                ...state,
                order: [...state.order, action.payload],
            };
        case orderTypes.ORDER_GET:
            return {
                ...state,
                order: action.payload.order
            };
        default:
            return state;
    }
}