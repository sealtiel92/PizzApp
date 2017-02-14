import React, { Component } from 'react';
import { Container, Content, Header, Title, Icon, Text, H1 } from 'native-base';
import { StyleSheet, Navigator, View, ListView, TouchableHighlight, TouchableOpacity, Image, Alert } from 'react-native';

const Menu = require('./menu');
const SideMenu = require('react-native-side-menu');
const Pedidos = require("./pedidos");
const Perfil = require("./perfil");

class ButtonMenu extends Component {
	
	handlePress(e) {
		if (this.props.onPress) {
			this.props.onPress(e);
		}
	}

	render() {
			return (
				<TouchableOpacity
				onPress={this.handlePress.bind(this)}
				style={this.props.style}>
				<Text>{this.props.children}</Text>
				</TouchableOpacity>
			);
		}
}

class Inicio extends Component {
	
	items = [];
	
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2
			}),
			isOpen: false,
			selectedItem: 'Inicio'
		}
	}

   componentDidMount(){
	  this.getProducts();
   }

	getProducts() {
		fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
		.then((response) => response.json())
		.then((json) => {
			this.items = json;
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(json)
			});
		})
		.catch((error) => {
			console.error(error);
		});
	}

	toggle() {
		this.setState({
		isOpen: !this.state.isOpen,
		});
	}

	updateMenuState(isOpen) {
		this.setState({ isOpen, });
	}

	onMenuItemSelected = (item) => {
		switch(item){
			case 'Inicio':
				break;
			case 'Pedidos':
				this.props.navigator.replace({
					title: 'Pedidos',
					name: 'Pedidos',
					passProps: {}});
				break;
			case 'Perfil':
				this.props.navigator.replace({
					title: 'Perfil',
					name: 'Perfil',
					passProps: {}});
				break;
			case 'Salir':
			  Alert.alert(
				  'Alerta',
				  '¿Estas seguro de salir?',
				  [
					{text: 'OK', onPress: () => console.log('OK Pressed')},
					{text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
				  ]
				)
				break;
		}
		this.setState({
		isOpen: false
		});
	}

	getId(id){
		alert(id);
	}

	render() {

		const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
		
		return (
			<SideMenu
				menu={menu}
				isOpen={this.state.isOpen}
				onChange={(isOpen) => this.updateMenuState(isOpen)}>
				<View style={styles.container}>
					<Container>
						<Header style={{backgroundColor: '#01B2FF'}}>
							<ButtonMenu transparent style={[{ padding:10, left:4, top: 4},styles.button]} onPress={() => this.toggle()}>
								<Icon name='menu'/>
							</ButtonMenu>
							<Title style={{alignSelf:'center'}}>Inicio</Title>
						</Header>
						<Content>
							<ListView
								dataSource={this.state.dataSource}
								renderRow={(item) => 
									<TouchableHighlight onPress={()=>alert(item.id)}>
										<Image
										style={{width: window.window/2, height: 150}}
										source={{uri: 'https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg'}}>
											<View style={{backgroundColor:'#000', opacity:0.8, flex:2}}>
												<H1 style={{color:'#ff4545',textAlign:'center'}}>{item.title}</H1>
											</View>
										</Image>
									</TouchableHighlight>
								}
							/>
						</Content>
					</Container>
				</View>
			</SideMenu>
		);
	}
}

const styles = StyleSheet.create({
		button: {
		position: 'absolute',
		},
		caption: {
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: 'center',
		},
		container: {
		flex: 1,
		backgroundColor: '#F5FCFF',
		},
		welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
		},
		instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
		},
});

module.exports = Inicio;