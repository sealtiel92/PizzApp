import React, { Component } from 'react';
import { StyleSheet, Navigator, Alert, View, ListView, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Title, Thumbnail, Icon, List, ListItem, Text, Badge, H3, InputGroup } from 'native-base';
import { SideMenu } from 'react-native-side-menu';

const Menu = require('./menu');
const Inicio = require("./inicio");
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

class Pedidos extends Component {
	
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
		fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
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
				this.props.navigator.replace({
					title: 'Inicio',
					name: 'Inicio',
					passProps: {}});
				break;
			case 'Pedidos':
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
							<ButtonMenu transparent style={[{ margin:10, left:4, top: 4},styles.button]} onPress={() => this.toggle()}>
								<Icon name='menu'/>
							</ButtonMenu>
							<Title style={{alignSelf:'center'}}>Pedidos</Title>
						</Header>
						<Content>
							<ListView
								dataSource={this.state.dataSource}
								renderRow={(item) => 
								<ListItem onPress={()=>{alert(item.id)}}>
									<Text style={{color:'#000'}}>Pedido: 10/11/2016</Text>
								</ListItem>
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

module.exports = Pedidos;