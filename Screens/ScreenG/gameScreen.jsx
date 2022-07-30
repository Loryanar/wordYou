import React, {useState, useEffect} from 'react';

import {  View, Text, SafeAreaView, ScrollView, StyleSheet,Alert } from 'react-native';
import { StatusBar } from 'react-native-web';
import Keyboard from "../../Components/Game/Keyboard"
import { colors,CLEAR,ENTER } from '../../constants';
import * as url from '../../text'

const copyArray=(arr)=>{
    return[...(arr.map(rows=>[...rows]))]
  }
export default function Game() {
  

const [flag,setFlag]=useState(1);
const [state, setState]= useState({
  word:'',
  reglas:''

});
const [rows,setRows]=useState([]);
  
const ChangeText=(name, value)=>{
  setState({...state, [name]: value})
}
const word=state.word
const ntry=state.reglas.trys;
const letters= word.split("")




const [curRow,setCurRow]=useState(0);

const [curCol,setCurCol]=useState(0);


 function getRoom(){
      let code= localStorage.getItem("codigo")
        try {
            fetch(url.url+"room/"+code,{
      
                    method: 'GET',
                    headers: new Headers({
                        'authorization': localStorage.getItem("token"),
                    })
      
                }).then(function (response) {
             
                    return response.json()
                                   }).then(data1=>{

                    console.log(data1.Reglas);
                    const dat=data1.Reglas;
                    console.log(dat)
                    ChangeText("reglas",dat)
                    
                    getWord(data1.Reglas);
                   
                    return dat
                })
        } catch (error) {
      
            console.error(error);    
      
        }
        
    
    }

    const getWord=async(reglas) =>{
        try {
            fetch("https://palabras-aleatorias-public-api.herokuapp.com/random-by-length?length="+reglas.wordLength, {
      
                    method: 'GET',
                    
      
                }).then(function (response) {
              
             const  data=response.json();
                
                    return data
                                   }).then(data1=>{
                                    console.log(data1.body.Word)
                                    let wo=data1.body.Word.split("")
                                    ChangeText("word",data1.body.Word)
                                    console.log(state);
                                    setRows( new Array(reglas.trys).fill(
                                      new Array(wo.length).fill("") 
                                    ) )
                    
                   
                    return data1
                })
        } catch (error) {
      
            console.error(error);    
      
        }
        
    
    }


useEffect(() => {
  if(flag==1){
    getRoom()
    setFlag(flag+1)
    console.log(flag)
    console.log("hellloo")
    console.log(state.reglas.trys)
   
  }
 

  
  })

const checkGameState=()=>{
  if(checkIfWon()){
    Alert.alert("Won");
   }else if(checkIfLost()){
  Alert.alert("Nah")
   }
  
}
const checkIfWon=()=>{
  const row=rows[curRow -1];
  return row.every((letter,i) => letter == letters[i])
}
const checkIfLost=()=>{
  return curRow== rows.length;
}



const onKeyPressed=(key)=>{
  const updatedRows= copyArray(rows);

  if(key==CLEAR){
    const prevCol= curCol - 1;
    if(prevCol>=0){
      updatedRows[curRow][prevCol]="";
      setRows(updatedRows);
      setCurCol(prevCol)
    }

    return
  }
if(key==ENTER){
if(curCol== rows[0].length){
  setCurRow(curRow + 1);
  setCurCol(0);
}
}

  if(curCol<rows[0].length){
  updatedRows[curRow][curCol]=key;
  setRows(updatedRows );
  setCurCol(curCol+1);
}return
}

const isCellActive= (row,col)=>{
  return row ==curRow&& col==curCol;
}

const getCellBGColor=(row,col)=>{
  const letter=rows[row][col];
  if(row>=curRow){
return colors.grisAzul
  }
if(letter==letters[col]){
  return colors.verde;
}if(letters.includes(letter)){
return colors.amarillo;
}
return colors.other;
}

const getAllLettersWithColor= (color) =>{
 return rows.flatMap((row,i) =>
row.filter((cell,j)=> getCellBGColor(i,j)==color)
);
}
const greenCaps= getAllLettersWithColor(colors.verde);
const blackCaps= getAllLettersWithColor(colors.grisAzul);
const yellowCaps= getAllLettersWithColor(colors.amarillo);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>

 <Text style={styles.title}>WORDYOU</Text>
 
<ScrollView style={styles.map}>
<View style={styles.map}>
  {rows.map((row,i)=>(
    <View key={`row-${i}`}  style={styles.row}>
    {row.map((letter,j)=>(
      <View
      key={`cell-${i}-${j}`}
       style={[styles.cell, 
      {
        borderColor:isCellActive(i,j)
        ? colors.grisclaro: 
        colors.tabs,
        backgroundColor:getCellBGColor(i,j)
      }
        ]}>
        <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
      </View>
    ))}

  </View>
  ))}
  
</View>
</ScrollView>

 <Keyboard onKeyPressed={onKeyPressed}
 greenCaps={greenCaps}
 yellowCaps={yellowCaps}
 blackCaps={blackCaps}/>

 </SafeAreaView> );
}


const styles= StyleSheet.create({
  container:{
flex:1,
backgroundColor: '#2e4053',
alignItems:"center",

  },
  title:{
fontSize:32,
fontWeight:"bold",
letterSpacing:7,
color: '#7DCEA0',

  },
  map:{
    alignSelf:"stretch",
    height:100,
    marginVertical:20,
  },
  row:{
    alignSelf:"stretch",
    flexDirection:"row"
  },
  cell:{
    borderWidth:2,
    borderColor: colors.grisclaro,
    flex:1,
    aspectRatio:1,
    margin:2,
      alignItems:"center",
   
    justifyContent: "center",
  },
  cellText:{
    color:colors.grisclaro,
    fontWeight:"bold",
    fontSize:28,

  }
});
