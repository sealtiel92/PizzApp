import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, TouchableHighlight, Navigator } from 'react-native';

var NavigatorBarRouterMapper = {
	LeftButton : function(route, navigator, index){
		if(index == 0){
			return null;
		}
		return(
			<TouchableHighlight onPress={ () => {
				if(index > 0){
					navigator.pop();
				}
			}}>
				<Text style={{marginTop: 10, marginLeft: 20, color: '#007AFF'}}>Atras</Text>
			</TouchableHighlight>
		);
	},
	RightButton : function(route, navigator, index){
		return null;
	},
	Title: function(route, navigator, index){
		if(route.name=='Login'){
			return null;
		}
		return(
			<Text style={{marginTop: 10, color: '#007AFF'}}>
				{route.name}
			</Text>
		);
	}
}

const Login = require("./components/login");
const Recovery = require("./components/recovery");
const Register = require("./components/register");
const Dashboard = require("./components/dashboard");

export default class pizzApp extends Component {

	constructor(props) {
		super(props);
	}

	renderScene(route, navigator){
		switch(route.name){
			case 'Login':
				return(
					<Login navigator={navigator} route={route} />
				);
			case 'Recovery':
				return(
					<Recovery navigator={navigator} route={route} />
				);
			case 'Register':
				return(
					<Register navigator={navigator} route={route} />
				);
			case 'Dashboard':
				return(
					<Dashboard navigator={navigator} route={route} />
				);
		}
	}

	render() {
		return (
			<Navigator style={{backgroundColor:'#fff'}}
				initialRoute={{
					name: 'Login',
					component: Login
				}}
				renderScene={this.renderScene}
				configureScene={(route)=>{
					if(route.sceneConfig){
						return route.sceneConfig;
					}
					return Navigator.SceneConfigs.FloatFromRight;
				}}
				NavigationBar={
					<Navigator.NavigationBar
						routeMapper={ NavigatorBarRouterMapper } />
				}
			/>
		)
	}
}


AppRegistry.registerComponent('pizzApp', () => pizzApp);
