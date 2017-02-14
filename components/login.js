import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { Container, Content, Header, Title, Thumbnail, List, ListItem, InputGroup, Input, Icon, Text, Button } from 'native-base';

class Login extends Component {

  constructor(props) {
	  super(props);
	  onRegister = onRegister.bind(this);
	  onRecovery = onRecovery.bind(this);
	  onLogin = onLogin.bind(this);
  }

   componentDidMount(){
	   //
   }
  
  render() {
	return (
	  <Container>
		  <Header style={{backgroundColor: '#01B2FF'}}>
			<Title style={{alignSelf:'center'}}>PizzApp</Title>
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
			</List>
			<Button 
				onPress={onLogin}
				style={{margin: 5, backgroundColor:'#FF3100', alignSelf: 'center', marginTop: 20, marginBottom: 20, width: 300, borderRadius:10, justifyContent:'center' }}>
				<Text>Iniciar</Text>
			</Button>
			<Text onPress={onRegister} style={{ alignSelf:'center', color: '#FFF' }}>¿Aun no estas registrado?</Text>
			<Text onPress={onRecovery} style={{ alignSelf:'center', color: '#FF3100', marginTop: 15 }}>Olvide mi contraseña</Text>
		  </Content>
	  </Container>
	);
  }
}

function onLogin (){
	this.props.navigator.replace({
		title: 'Dashboard',
		name: 'Dashboard',
		passProps: {}
	});
}

function onRecovery (){
	this.props.navigator.push({
		title: 'Recovery',
		name: 'Recovery',
		passProps: {}
	});
}

function onRegister (){
	this.props.navigator.push({
		title: 'Register',
		name: 'Register',
		passProps: {}
	});
}

module.exports = Login;