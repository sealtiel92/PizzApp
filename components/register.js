import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Button, Header, Title, Thumbnail } from 'native-base';

class Register extends Component {

	constructor(props) {
		super(props);
		this.onRegister = this.onRegister.bind(this);
	}

	onRegister (){
		this.props.navigator.pop();
	}

	render() {
		return (
		<Container>
			<Header style={{backgroundColor: '#01B2FF'}}>
				<Title style={{alignSelf:'center'}}>Registro</Title>
			</Header>
			<Content style={{backgroundColor:'#FFB700'}}>
				<Thumbnail style={{alignSelf:'center', width:150, height:100, marginTop: 40}} 
				source={{uri:'https://cdn.pixabay.com/photo/2012/04/13/01/53/pizza-31782_960_720.png'}} />
				<List style={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}>
					<ListItem style={{margin: 5}}>
						<InputGroup style={{backgroundColor:'#fff', opacity:0.5, borderRadius: 10}}>
							<Icon name="ios-person" style={{ color: '#0A69FE' }} />
							<Input placeholder="Correo" />
						</InputGroup>
					</ListItem>
					<ListItem style={{margin: 5}}>
						<InputGroup style={{backgroundColor:'#fff', opacity:0.5, borderRadius: 10}}>
							<Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
							<Input placeholder="Contraseña" secureTextEntry />
						</InputGroup>
					</ListItem>
					<ListItem style={{margin: 5}}>
						<InputGroup style={{backgroundColor:'#fff', opacity:0.5, borderRadius: 10}}>
							<Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
							<Input placeholder="Confirmacion de contraseña" secureTextEntry />
						</InputGroup>
					</ListItem>
				</List>
				<Button 
					onPress={this.onRegister}
					style={{margin: 5, backgroundColor:'#FF3100', alignSelf: 'center', marginTop: 20, marginBottom: 20, width: 300, borderRadius:10, justifyContent:'center' }}>
					<Text>Registrar</Text>
				</Button>
			</Content>
		</Container>
		);
	}
}

module.exports = Register;