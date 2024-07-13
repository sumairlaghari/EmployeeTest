import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import getStyles from './styles';
import {GlobalImports} from '../../config/globalImports';
import {BottomSheet} from 'react-native-btr';
import EmployeeOptions from '../../components/bottomSheet/employeeOptions';
import { useNavigation } from '@react-navigation/native';

const EmployeeComp = props => {
    const themeMode = GlobalImports.useSelector(state => state?.themeMode?.state);
    const colors = GlobalImports.COLORS(themeMode);
    const styles = getStyles(colors);

    const navigation = useNavigation();

    const [optionsVisible, setOptionsVisible] = useState(false);

    var employeeData = props.data;

  return (
    <View style={styles.compContainer}>
      <View style={styles.compDetailsWrap} >
      <View style={{alignItems:'flex-start'}} >
            <Text style={styles.compText} >Name</Text>
            <Text style={styles.compText} >Age</Text>
            <Text style={styles.compText} >Salary</Text>
        </View>
        <View style={{alignItems:'flex-end'}} >
            <Text style={styles.compText2} >{employeeData.employee_name}</Text>
            <Text style={styles.compText2} >{employeeData.employee_age}</Text>
            <Text style={styles.compText2} >{employeeData.employee_salary}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.compViewButton} onPress={()=>navigation.navigate('employee',{data: employeeData})} >
        <Text style={{color:'white'}} >View More Details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>setOptionsVisible(true)} style={styles.compOptionsButton} >
        <GlobalImports.ICONS.AntDesign name={optionsVisible ? "up" : "down"} size={24} color="black" />
      </TouchableOpacity>
      <BottomSheet visible={optionsVisible} onBackButtonPress={()=>setOptionsVisible(false)} onBackdropPress={()=>setOptionsVisible(false)}>
        <EmployeeOptions />
      </BottomSheet>
    </View>
  );
};

export default EmployeeComp;
