import React from "react";
import {View, Text, Button} from 'react-native'

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <View>
      {gotoPrevPage && <Button onPress={gotoPrevPage} title='Previous page'/>}
      {gotoNextPage && <Button onPress={gotoNextPage} title='Next Page'/>}
    </View>
  );
}
