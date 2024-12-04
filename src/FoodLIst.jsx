// function FoodList(){
//     let foodList=["pizza","burger","fries","momose","noodels","ice-crime","donutes"];
//     let foodListarray=foodList.map((food=><li>{food}</li>));

//     if(foodListarray.length==0){
//         return <h1> array is empty</h1>;
//     }else{
//         return(
//         <>
//         <ul id="list">{foodListarray}</ul>
//         </>
//     );
//     }
    

// }

// export default FoodList;




function FoodList({foodListarray}){
    // let foodList=["pizza","burger","fries","momose","noodels","ice-crime","donutes"];
    // let foodListarray=foodList.map((food=><li>{food}</li>));

    if(foodListarray.length==0){
        return <h1> array is empty</h1>;
    }else{
        return(
        <>
        <ul id="list">{foodListarray.map((element)=>(
            <li key={element}>{element}</li>
            ))}
            </ul>
        </>
    );
    }
    

}

export default FoodList;