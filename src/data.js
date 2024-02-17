
export const infor =[
    {   
        id: 1,
        userPhoto:"https://i.pinimg.com/564x/10/14/73/101473c762a6a40abdf5d7756715040d.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1090"
    },
    {   
        id: 2,
        userPhoto:"https://i.pinimg.com/564x/da/ac/de/daacde957999e2869480796333d567b7.jpg",
        name: "Join Sthaham",
        product :"Gi Martion", 
        price : "$1020" 

    },
    {   
        id: 3,
        userPhoto:"https://i.pinimg.com/564x/73/22/93/732293d5d4d78951a7421344ae731eba.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1060" 
    },
    {   
        id: 4,
        userPhoto:"https://i.pinimg.com/564x/66/46/31/664631d5c3d9e38fefd2dd83af4dbd76.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1450" 
    },
    {   
        id: 5,
        userPhoto:"https://www.dungplus.com/wp-content/uploads/2020/08/galaxy-11.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1120" 
    },
    {   id: 6,
        userPhoto:"https://www.dungplus.com/wp-content/uploads/2020/08/galaxy-16.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1330" 
    },
    {   id: 7,
        userPhoto:"https://www.dungplus.com/wp-content/uploads/2020/08/galaxy-22.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1220" 
    },
    {   id: 8,
        userPhoto:"https://www.dungplus.com/wp-content/uploads/2020/08/galaxy-34.jpg",
        name: "Join Sthaham",
        product :"Giorgio Celin", 
        price : "$1500" 
    },
]
export function getProduct(){
    return infor;
}
export function getProductByNumber(id){
    return infor.find(
        (product) => product.id === id
    );
}