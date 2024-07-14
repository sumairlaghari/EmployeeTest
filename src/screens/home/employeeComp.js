import {Text, TouchableOpacity, View, Alert,TextInput, Modal, Pressable, Keyboard} from 'react-native';
import React, {useState} from 'react';
import getStyles from './styles';
import {GlobalImports} from '../../config/globalImports';
import {BottomSheet} from 'react-native-btr';
import EmployeeOptions from '../../components/bottomSheet/employeeOptions';
import { useNavigation } from '@react-navigation/native';
import { deleteRequest,updateRequest } from '../../config/helperFunction';
import { DeleteEmployeeUrl,UpdateEmployeeUrl } from '../../config/urls';

const EmployeeComp = props => {
    const dispatch = GlobalImports.useDispatch();
    const themeMode = GlobalImports.useSelector(state => state?.themeMode?.state);
    const colors = GlobalImports.COLORS(themeMode);
    const styles = getStyles(colors);

    const navigation = useNavigation();

    const [optionsVisible, setOptionsVisible] = useState(false);

    const [isModalVisible, setIsModalVisible] = useState(false);

    var employeeData = props.data;
    var onRefresh = props.methods.onRefresh;

    const [employeeState, setEmployeeState] = useState({
      name:employeeData.employee_name,
      age:String(employeeData.employee_age),
      salary:String(employeeData.employee_salary),
    });
    const updateEmployeeState = data => setEmployeeState(prev => ({...prev, ...data}));
    const {name, age, salary,} = employeeState;

    const deleteEmp = async () => {
      Alert.alert(
          'Confirmation',
          'Do you want to delete?',
          [
            {
              text: 'No',
              onPress: () => console.log('No Pressed'),
              style: 'cancel',
            },
            {
              text: 'Yes',
              onPress: async () => {
                dispatch({type:GlobalImports.types.LoaderOn})
                const response = await deleteRequest(DeleteEmployeeUrl+employeeData.id,{})
                if(response !==null){
                  console.log(response.data.message)
                  dispatch({type: GlobalImports.types.LoaderOff})
                  GlobalImports.successMessage(response.data.message)
                  onRefresh()
                }else{
                  dispatch({type:GlobalImports.types.LoaderOff})
                }
              },
            },
          ],
      );
    }

    const inputFields = (stringVal,dataVal) => {
      return (
        <View style={styles.inputFieldsComp}>
        <Text style={{color:colors?.commonWhite}} >{stringVal}: </Text>
        <View style={styles.inputContainer}>
        <TextInput
            value={dataVal}
            style={styles.input}
            placeholder={stringVal}
            placeholderTextColor={'#FFFFFF50'}
            onChangeText={(val)=>updateEmployeeState(stringVal == 'Name' ? {name: val} : stringVal == 'Age' ? {age: val} : {salary: val})}
            keyboardType={stringVal == 'Name' ? 'default' : 'number-pad'}
        />
        </View>
        </View>
      )
    }
  
    const updateEmp = async () => {
      if (name != '' && age != '' && salary != ''){
        let obj = {
          name:name,
          age:age,
          salary:salary,
        }
        setIsModalVisible(false)
        dispatch({type: GlobalImports.types.LoaderOn})
        const response = await updateRequest(UpdateEmployeeUrl+employeeData.id,obj)
        if(response !== null){
          console.log(response.data.data)
          dispatch({type: GlobalImports.types.LoaderOff})
          GlobalImports.successMessage(response.data.status)
          onRefresh()
        }else{
          dispatch({type: GlobalImports.types.LoaderOff})
        }
      }else{
        GlobalImports.errorMessage('Please input all fields before submit');
      }
    }

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
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:GlobalImports.hp2(2)}}>
      <TouchableOpacity style={styles.compViewButton} onPress={()=>navigation.navigate('employee',{data: employeeData})} >
        <Text style={{color:'white'}} >View</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.compViewButton,{backgroundColor:'orange'}]} onPress={()=> setIsModalVisible(true)} >
        <Text style={{color:'white'}} >Update</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.compViewButton,{backgroundColor:'red'}]} onPress={()=> deleteEmp()} >
        <Text style={{color:'white'}} >Delete</Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity disabled={true} onPress={()=>setOptionsVisible(true)} style={styles.compOptionsButton} >
        <GlobalImports.ICONS.AntDesign name={optionsVisible ? "up" : "down"} size={24} color="black" />
      </TouchableOpacity>
      <BottomSheet visible={optionsVisible} onBackButtonPress={()=>setOptionsVisible(false)} onBackdropPress={()=>setOptionsVisible(false)}>
        <EmployeeOptions />
      </BottomSheet>
      <Modal
        animationType='fade'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          //Alert.alert('Modal has been closed.');
          setIsModalVisible(false);
        }}>
          <Pressable onPress={Keyboard.dismiss} style={styles.createEmployeeContainer}>
            <View style={[styles.inputWrap]}>
                <TouchableOpacity onPress={()=>setIsModalVisible(false)} style={styles.crossButton} >
                    <GlobalImports.ICONS.Entypo name="cross" size={18} color={colors?.commonBlack} />
                </TouchableOpacity>
                <Text style={{color:colors?.commonWhite,marginBottom:10}} >Input Below Fields</Text>
                {inputFields('Name',name)}
                {inputFields('Age',age)}
                {inputFields('Salary',salary)}
                <TouchableOpacity onPress={()=> updateEmp()} style={[styles.submitButton]} >
                    <Text style={{color:colors.commonBlack}} >UPDATE</Text>
                </TouchableOpacity>
            </View>
          </Pressable>
      </Modal>
    </View>
  );
};

export default EmployeeComp;
