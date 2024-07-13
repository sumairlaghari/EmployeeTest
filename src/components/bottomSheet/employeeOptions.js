import React from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import { GlobalImports } from '../../config/globalImports';

const EmployeeOptions = props => {

  const {userData,token} = GlobalImports.useSelector(state => state?.userData);

  const themeMode = GlobalImports.useSelector(state => state?.themeMode?.state);
  const colors = GlobalImports.COLORS(themeMode);
  
  const languageMode = GlobalImports.useSelector(state => state?.languageMode?.state);
  const language = GlobalImports.Languages(languageMode);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical:GlobalImports.hp2(1),marginHorizontal:GlobalImports.wp2(6),maxHeight:GlobalImports.hp2(44),minHeight:GlobalImports.hp2(20)}} >
        <Text onPress={()=>alert('updateRecordFunction')} style={{color:colors?.commonWhite,marginVertical:10,fontSize:GlobalImports.rfv(12),}} >{'Update Record'}</Text>
        <Text onPress={()=>alert('deleteRecordFunction')} style={{color:colors?.commonWhite,marginVertical:10,fontSize:GlobalImports.rfv(12),}} >{'Delete Record'}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:GlobalImports.wp2(100),
    overflow:'hidden',
    backgroundColor:'darkgreen',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
});

export default EmployeeOptions;