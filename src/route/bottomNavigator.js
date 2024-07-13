import React from 'react';
import {StyleSheet,View,Platform,Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalImports } from '../config/globalImports';

import Home from '../screens/home';
import Employee from '../screens/employee';

const Tab = createBottomTabNavigator();

export const BottomTabs = () => {
  const themeMode = GlobalImports.useSelector(state => state?.themeMode?.state);
  const colors = GlobalImports.COLORS(themeMode);
    
  return (
    <>
      <Tab.Navigator
        backBehavior='history'
        initialRouteName="home"
        screenOptions={({ route }) => ({
          orientation: 'portrait',
          headerShown: false,
          tabBarHideOnKeyboard: true,
          swipeEnabled: true,
          animationEnabled: true,
          tabBarStyle: {
            backgroundColor:colors?.tabBarBg,
            height:Platform.OS === 'ios' ? GlobalImports.hp2(11) : GlobalImports.hp2(9),
          },
        })}
      >
        <Tab.Screen
          name="home"
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? 'white' : '#7C7C7C70', fontSize: GlobalImports.rfv(12), fontWeight: focused ? 'bold' : 'normal'}} >Home</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
                <View style={{paddingVertical:6,paddingHorizontal:2}} >
                  <GlobalImports.ICONS.MaterialIcons name="home" size={focused?34:30} color={focused?colors.tabBarActiveIcon:colors.tabBarInactiveIcon} />
                </View>
            ),
          }}
          component={Home}
        />
        <Tab.Screen
          name="employee"
          options={{
            tabBarLabel: ({focused}) => (
              <Text style={{color: focused ? 'white' : '#7C7C7C70', fontSize: GlobalImports.rfv(12), fontWeight: focused ? 'bold' : 'normal'}} >Employee</Text>
            ),
            tabBarIcon: ({ focused, color, size }) => (
                <View style={{paddingVertical:6,paddingHorizontal:2}} >
                  <GlobalImports.ICONS.Entypo name="user" size={focused?34:30} color={focused?colors.tabBarActiveIcon:colors.tabBarInactiveIcon} />
                </View>
            ),
          }}
          component={Employee}
        />            
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({

});