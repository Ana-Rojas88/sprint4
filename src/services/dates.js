import { facebook, google } from "../firebase/firebaseConfig";

export const restaurantList = [
    {
        label: "Nombre",
        type: "text",
        name: "name",
    },
    {
        label: "Categoría",
        type: "select",
        name: "category",
    },
    {
        label: "Time",
        type: "textarea",
        name: "time",
    },
    {
        label: "Before",
        type: "textarea",
        name: "before",
    },
    {
        label: "Imagen",
        type: "file",
        name: "image",
    },
];
export const foodList = [
    {
        label: "Nombre del restaurante",
        type: "textarea",
        name: "idRestaurant",
    },
    {
        label: "Categoría",
        type: "select",
        name: "category",
    },
    {
        label: "Nombre de la comida",
        type: "textarea",
        name: "name",
    },
    {
        label: "Coloque una descripción de la comida",
        type: "textarea",
        name: "description",
    },
    {
        label: "Precio",
        type: "number",
        name: "price",
    },
    {
        label: "Imagen",
        type: "file",
        name: "image",
    },
];
export const category = [
 
    {
        label: "Pizza",
        value: 1,
    },
    {
        label: "Salad",
        value: 2,
    },
    {
        label: "Fast food",
        value: 3,
    },
    {
        label: "Soup",
        value: 4,
    }

];

export const login = [
    {
      name: "google",
      image: "https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1",
      provider: google,
    },
    {
      name: "facebook",
      image: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
      provider: facebook,
    },
  ];
