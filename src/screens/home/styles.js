import {StyleSheet, Platform, StatusBar} from 'react-native';
import {GlobalImports} from '../../config/globalImports';

const getStyles = colors => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.statusBar,
    paddingTop: Platform?.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  wrapper:{
    flex:1,
    backgroundColor: colors.themeColor,
  },
  headingWrap:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:GlobalImports.wp2(6),
    marginBottom:GlobalImports.hp2(1),
  },
  heading:{
    fontSize:GlobalImports.rfv(22),
    color:colors.commonWhite,
    fontWeight:'bold',
  },
  noDataText:{
    fontSize:GlobalImports.rfv(16),
    color:colors.commonWhite,
  },
  noDataView:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  searchContainer:{
    width: GlobalImports.wp2(90),
    height: GlobalImports.hp2(6),
    backgroundColor:'white',
    borderRadius:GlobalImports.wp2(4),
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:12,
    marginVertical:GlobalImports.hp2(1.4),
    alignSelf:'center',
  },
  inputBox:{
    flex: 1,
    color: 'black',
    paddingRight:6,
  },

  //---EmployeeCompStyles---//
  compContainer:{
    width:GlobalImports.wp2(90),
    overflow:'hidden',
    borderRadius:GlobalImports.wp2(4),
    backgroundColor:'white',
    marginVertical:GlobalImports.hp2(2),
    marginHorizontal:GlobalImports.wp2(5),
    paddingTop:GlobalImports.hp2(6),
    paddingBottom:GlobalImports.hp2(2),
    paddingHorizontal:GlobalImports.wp2(2),
  },
  compDetailsWrap:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  compText:{
    color:colors.commonBlack,
  },
  compText2:{
    color:colors.commonBlack,
    fontWeight:'bold',
    fontSize:GlobalImports.rfv(12),
  },
  compViewButton:{
    width:GlobalImports.wp2(24),
    height:GlobalImports.hp2(4),
    borderRadius:GlobalImports.wp2(2),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    alignSelf:'center',
  },
  compOptionsButton:{
    position:'absolute',
    zIndex:9,
    right:GlobalImports.wp2(4),
    top:GlobalImports.hp2(1),
  },
  //---End---//

  createEmployeeContainer:{
    flex:1,
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  inputWrap:{
    width:GlobalImports.wp2(80),
    padding:20,
    overflow:'hidden',
    backgroundColor:'#2B2D2E',
    borderRadius:10,
  },
  crossButton:{
    backgroundColor:colors.commonWhite,
    width:GlobalImports.wp2(6),
    height:GlobalImports.wp2(6),
    borderRadius:100,
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center',
    position:'absolute',
    top:GlobalImports.hp2(1),
    right:GlobalImports.wp2(2),
    zIndex:9,
  },
  inputFieldsComp:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between',
    marginVertical:10,
  },
  inputContainer:{
    width: GlobalImports.wp2(54),
    height:GlobalImports.hp2(4),
    borderBottomWidth:1,
    borderColor:'#FFFFFF',
  },
  input:{
    flex: 1,
    color: colors?.commonWhite,
  },
  submitButton:{
    backgroundColor:'#FFFFFF',
    width:GlobalImports.wp2(60),
    height:GlobalImports.hp2(5),
    borderRadius:GlobalImports.wp2(2),
    alignItems:'center',
    overflow:'hidden',
    justifyContent:'center',
    alignSelf:'center',
    marginTop:GlobalImports.hp2(2),
  },
});
export default getStyles;
