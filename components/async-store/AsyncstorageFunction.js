import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getData(){
    return await AsyncStorage.getItem("Note");

}

export async function setData(jsonValue){
    console.log("jsonValue", jsonValue)
    await AsyncStorage.setItem("Note", jsonValue);
}