import React, { Component } from 'react';
import { AppRegistry, Text, TouchableHighlight, Navigator } from 'react-native';

// Components
const Inicio = require("./inicio");
const Pedidos = require("./pedidos");
const Perfil = require("./perfil");

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
		if(route.name=='Inicio'){
			return null;
		}
		return(
			<Text style={{marginTop: 10, color: '#007AFF'}}>
				{route.name}
			</Text>
		);
	}
}

class Dashboard extends Component {

	constructor(props) {
		super(props);
	}

	renderScene(route, navigator){
		switch(route.name){
			case 'Inicio':
				return(
					<Inicio navigator={navigator} route={route} />
				);
			case 'Pedidos':
				return(
					<Pedidos navigator={navigator} route={route} />
				);
			case 'Perfil':
				return(
					<Perfil navigator={navigator} route={route} />
				);
		}
	}

	render() {
		return (
				<Navigator style={{backgroundColor:'#fff'}}
						initialRoute={{
						name: 'Inicio',
						component: Inicio
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

module.exports = Dashboard;