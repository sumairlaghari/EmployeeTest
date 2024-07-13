import {SafeAreaView, Text, View, Image} from 'react-native';
import React from 'react';
import {GlobalImports} from '../../config/globalImports';
import getStyles from './styles';

const Employee = props => {
  const dispatch = GlobalImports.useDispatch();
  const themeMode = GlobalImports.useSelector(state => state?.themeMode?.state);
  const languageMode = GlobalImports.useSelector(state => state?.languageMode?.state);
  const language = GlobalImports.Languages(languageMode);
  const colors = GlobalImports.COLORS(themeMode);
  const styles = getStyles(colors);

  var data = props?.route?.params?.data;

  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.headingWrap}>
            <Text style={styles.heading} >{'Employee Details'}</Text>
        </View>
        {data == undefined ? (
            <View style={styles.noDataView}>
                <Text style={styles.noDataText}>{'No Data Found'}</Text>
            </View>
        ) : (
            <>
            <View style={styles.imgContainer} >
                <Image source={GlobalImports.IMAGES.profileIcon} style={{width:'100%', height:'100%'}} resizeMode='cover' />
            </View>
            <View style={styles.detailsWrap}>
                <Text style={styles.textStyle1} >Employee Name:</Text>
                <Text style={styles.textStyle2} >{data.employee_name}</Text>
            </View>
            <View style={styles.detailsWrap}>
                <Text style={styles.textStyle1} >Employee Age:</Text>
                <Text style={styles.textStyle2} >{data.employee_age}</Text>
            </View>
            <View style={styles.detailsWrap}>
                <Text style={styles.textStyle1} >Employee Salary:</Text>
                <Text style={styles.textStyle2} >{data.employee_salary}</Text>
            </View>
            </>
        )}
      </View>
    </View>
  );
};

export default Employee;
