import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <View style={Styles.btnStyle}>
      {gotoPrevPage && <TouchableOpacity style={Styles.appButtonContainer}  
      onPress={gotoPrevPage}><Text style={Styles.appButtonText}>Previous Page</Text>
      </TouchableOpacity>}
      {gotoNextPage && <TouchableOpacity style={Styles.appButtonContainer} 
      onPress={gotoNextPage}><Text style={Styles.appButtonText}>Next Page</Text>
      </TouchableOpacity>}
    </View>
  );
}

const Styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 22,
        marginTop:10
      },
      appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
      }
})
