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
    alignItems:'center',
    justifyContent:'center',
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
  imgContainer:{
    width:GlobalImports.wp2(30),
    height:GlobalImports.wp2(30),
    borderRadius:100,
    alignSelf:'center',
    marginVertical:GlobalImports.hp2(4),
  },
  detailsWrap:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:GlobalImports.wp2(5),
    marginVertical:GlobalImports.hp2(1),
  },
  textStyle1:{
    color:'white',
    fontSize:GlobalImports.rfv(12),
  },
  textStyle2:{
    color:'white',
    fontSize:GlobalImports.rfv(14),
    fontWeight:'bold',
  },
});
export default getStyles;
