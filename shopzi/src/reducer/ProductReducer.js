export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "search":
      return { ...state, search: action.payload };

    case "SET_PRODUCTS_DATA":
      return { ...state, productsData: action.payload };

    case 'checkbox' :
        return{...state,checkbox: action.payload.checked ? [...state.checkbox,action.payload.value] : state.checkbox.filter((item)=>item!==action.payload.value)}

    case 'rating' : 
    return {...state,rating: action.payload}

    case 'sort' :
        return {...state,sort: action.payload}

    case 'clearFilter': 
            return{...state,search:'',checkbox:[],rating:'',sort:''}

            case 'range' :
                return {...state,range:action.payload}
    default:
      return { ...state };
  }
};
