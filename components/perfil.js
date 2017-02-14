import React, { Component } from 'react';
import { StyleSheet, Navigator, View, TouchableOpacity, Alert } from 'react-native';
import { Container, Content, Header, Title, Icon, List, Button, ListItem, Text, InputGroup, Input } from 'native-base';

const Menu = require('./menu');
const Pedidos = require("./pedidos");
const Inicio = require("./inicio");
const SideMenu = require('react-native-side-menu');


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

class Perfil extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
		  isOpen: false,
		  selectedItem: 'About',
		  name: '',
		  lastname: '',
		  phone: ''
	  };
	}

	componentDidMount(){
	this.getPerfil();
	}
	
	getPerfil() {
		fetch('https://jsonplaceholder.typicode.com/users/1')
		.then((response) => response.json())
		.then((json) => {
			this.setState({
			name:json.name, 
			lastname:json.username,
			phone: json.phone
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
				this.props.navigator.replace({
					title: 'Inicio',
					name: 'Inicio',
					passProps: {}});
				break;
			case 'Pedidos':
				this.props.navigator.replace({
					title: 'Pedidos',
					name: 'Pedidos',
					passProps: {}});
				break;
			case 'Perfil':
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

	onValueChange(value) {
		this.setState({
			selected1: value,
		});
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
							<ButtonMenu 
							transparent style={[{ margin:10, left:4, top: 4},styles.button]} 
							onPress={() => this.toggle()}>
								<Icon name='menu'/>
							</ButtonMenu>
							<Title style={{alignSelf:'center'}}>Perfil</Title>
						</Header>
						<Content>           
							<List style={{marginTop:30}}>
								<ListItem>
									<InputGroup>
										<Input 
										placeholder="Nombre" 
										value={this.state.name}/>
									</InputGroup>
								</ListItem>
								<ListItem>
									<InputGroup>
										<Input 
										placeholder="Apellido" 
										value={this.state.lastname} />
									</InputGroup>
								</ListItem>
								<ListItem>
									<InputGroup>
										<Input 
										placeholder="Telefono" 
										keyboardType="numeric" 
										value={this.state.phone}/>
									</InputGroup>
								</ListItem>
								<ListItem>
									<InputGroup>
										<Input 
										placeholder="Contraseña" 
										secureTextEntry/>
									</InputGroup>
								</ListItem>
							</List>
							<Button success 
							  onPress={()=>{alert("save")}}
							  style={{borderRadius:10, alignSelf: 'center', 
							  marginTop: 20, marginBottom: 20 }}>
								<Text>Guardar</Text>
							</Button>
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

module.exports = Perfil;