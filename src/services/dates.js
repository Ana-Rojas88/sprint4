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
      image: "https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png",
      provider: google,
    },
    {
      name: "facebook",
      image: "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png",
      provider: facebook,
    },
  ];
