export var url='https://clonwordle.herokuapp.com/';
export const getData = async (k)=>{
    const toke= await AsyncStorage.getItem(k)
    console.log(toke)
    if(toke=!null){
        return toke;
    }
}
