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
    width:GlobalImports.wp2(64),
    height:GlobalImports.hp2(4),
    borderRadius:GlobalImports.wp2(2),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green',
    alignSelf:'center',
    marginTop:GlobalImports.hp2(2),
  },
  compOptionsButton:{
    position:'absolute',
    zIndex:9,
    right:GlobalImports.wp2(4),
    top:GlobalImports.hp2(1),
  },
  //---End---//
});
export default getStyles;
