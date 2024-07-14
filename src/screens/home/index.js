import {SafeAreaView, Text, TouchableOpacity, View,FlatList,RefreshControl,TextInput, Modal, Pressable, Keyboard} from 'react-native';
import React, {useState,useEffect,useCallback} from 'react';
import {GlobalImports} from '../../config/globalImports';
import getStyles from './styles';
import { getRequest,postRequest } from '../../config/helperFunction';
import EmployeeComp from './employeeComp';
import { GetEmployeeUrl,CreateEmployeeUrl } from '../../config/urls';

const Home = props => {
  const dispatch = GlobalImports.useDispatch();
  const themeMode = GlobalImports.useSelector(state => state?.themeMode?.state);
  const languageMode = GlobalImports.useSelector(state => state?.languageMode?.state);
  const language = GlobalImports.Languages(languageMode);
  const colors = GlobalImports.COLORS(themeMode);
  const styles = getStyles(colors);

  const [dataLoading ,setDataLoading] = useState(false)
  const {userData,token} = GlobalImports.useSelector(state => state?.userData);
  const [data , setData] = useState([]);
  const [isloading ,setIsloading] = useState(false)

  const [refreshing, setRefreshing] = useState(false);

  const [searchText, setSearchText] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

  const [newEmployeeState, setNewEmployeeState] = useState({
    name:'',
    age:'',
    salary:'',
  });
  const updateNewEmployeeState = data => setNewEmployeeState(prev => ({...prev, ...data}));
  const {name, age, salary,} = newEmployeeState;

  // useEffect(()=>{
  //   const unsubscribe = props?.navigation.addListener('focus', () => {
  //     runThis()
  //   });
  //   return unsubscribe;
  // },[props?.navigation])
  useEffect(()=>{
      runThis()
  },[])

  const runThis = async () => {
    setDataLoading(true)
    const response = await getRequest(GetEmployeeUrl,token,{})
    if(response !== null){
      console.log(response.data)
      setData(response.data.data)
      setDataLoading(false)
    }else{
      setDataLoading(false)
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      setDataLoading(false);
      setData([]);
      setIsloading(false);
      setSearchText('');

      runThis();
    }, 1000);
  }, []);

  const dataFilter = data.filter(item =>
    ( 
      String(item?.employee_name).toLowerCase().includes(searchText.toLowerCase()) 
        || 
      String(item?.employee_salary).toLowerCase().includes(searchText.toLowerCase()) 
        || 
      String(item?.employee_age).toLowerCase().includes(searchText.toLowerCase()) 
    )
  );
  
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
          onChangeText={(val)=>updateNewEmployeeState(stringVal == 'Name' ? {name: val} : stringVal == 'Age' ? {age: val} : {salary: val})}
          keyboardType={stringVal == 'Name' ? 'default' : 'number-pad'}
      />
      </View>
      </View>
    )
  }

  const onCreateEmp = async () => {
    if (name != '' && age != '' && salary != ''){
      let obj = {
        name:name,
        age:age,
        salary:salary,
      }
      setIsModalVisible(false)
      dispatch({type: GlobalImports.types.LoaderOn})
      const response = await postRequest(CreateEmployeeUrl,obj,token)
      if(response !== null){
        console.log(response.data.data)
        updateNewEmployeeState({name:'',age:'',salary:''})
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
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.headingWrap}>
        <Text style={styles.heading} >{'Employees List'}</Text>
        <TouchableOpacity onPress={()=>setIsModalVisible(true)} >
          <GlobalImports.ICONS.FontAwesome name="user-plus" size={30} color="green" />
        </TouchableOpacity>
        </View>

        <View style={styles.searchContainer} >
            <TextInput
              value={searchText}
              style={styles.inputBox}
              placeholder={'Search...'}
              placeholderTextColor={'black'}
              onChangeText={(val)=>setSearchText(val)}
            />
            <GlobalImports.ICONS.MaterialIcons name="search" size={20} color={'black'} />
        </View>

        {dataLoading && data?.length === 0 && (
          <View style={{paddingVertical:GlobalImports.hp2(4)}} >
              <GlobalImports.SkypeIndicator color={colors?.loaderColor} />
          </View>
        )}

        <FlatList
            refreshControl={<RefreshControl colors={[colors?.loaderColor2]} tintColor={colors?.loaderColor} refreshing={refreshing} onRefresh={onRefresh} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow:1}}
            data={dataFilter}
            ListEmptyComponent={()=>          
              <>
            {!dataLoading && data?.length === 0 && (
           <View style={styles.noDataView}>
              <Text style={styles.noDataText}>{'No Data Found'}</Text>
           </View>
            )}
              </>
            }
            renderItem={({item,index}) => {
              return (
                <EmployeeComp data={item} key={index} methods={{onRefresh}} />
              );
            }}
        />

      </View>

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
                <TouchableOpacity onPress={()=> onCreateEmp()} style={[styles.submitButton]} >
                    <Text style={{color:colors.commonBlack}} >SUBMIT</Text>
                </TouchableOpacity>
            </View>
          </Pressable>
      </Modal>

    </View>
  );
};

export default Home;
