import React, {useState, useEffect} from 'react';

import {  View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { StatusBar } from 'react-native-web';
import Keyboard from "../../Components/Game/Keyboard"
import { colors } from '../../constants';


export default function Game() {
  const copyArray=(arr)=>{
    return[...(arr.map(rows=>[...rows]))]
  }
const word="hollo";
const ntry=6;
const letters= word.split("");

const [rows,setRows]=useState( new Array(ntry).fill(
  new Array(letters.length).fill("") 
));

const [curRow,setCurRow]=useState(0);

const [curCol,setCurCol]=useState(0);

const onKeyPressed=(key)=>{
  const updatedRows= copyArray(rows)
  updatedRows[curRow][curCol]=key;
  setRows(updatedRows );
  setCurCol(curCol+1);
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light"/>

 <Text style={styles.title}>WORDYOU</Text>
 
<ScrollView style={styles.map}>
<View  style={styles.map}>
  {rows.map((row)=>(
    <View  style={styles.row}>
    {row.map((letter)=>(
      <View style={styles.cell}>
        <Text style={styles.cellText}>{letter.toUpperCase()}</Text>
      </View>
    ))}

  </View>
  ))}
  
</View>
</ScrollView>

 <Keyboard onKeyPressed={onKeyPressed}/>

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
