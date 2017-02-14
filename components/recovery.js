import React, { Component } from 'react';
import { StyleSheet, Navigator } from 'react-native';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Button, Header, Title, Thumbnail } from 'native-base';

class Recovery extends Component {

	constructor(props) {
		super(props);
		onRecuperar = onRecuperar.bind(this);
	}

	render() {
		return (
	  <Container>
		  <Header style={{backgroundColor: '#01B2FF'}}>
			<Title style={{alignSelf:'center'}}>Recuperacion</Title>
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
			</List>
			<Button 
				onPress={onRecuperar}
				style={{margin: 5, backgroundColor:'#FF3100', alignSelf: 'center', marginTop: 20, marginBottom: 20, width: 300, borderRadius:10, justifyContent:'center' }}>
				<Text>Recuperar</Text>
			</Button>
		  </Content>
	  </Container>
		);
	}
}

	function onRecuperar (){
		Alert.alert(
			'Verificado',
			'Se ha enviado un correo',
			[
				{text: 'OK', onPress: () => this.props.navigator.pop()},
			]);
	}

	const styles = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: "#607D8B",
				justifyContent: 'center',
				alignItems: 'center',
				opacity: 50,
			},
			title: {
				alignItems: 'center',
				justifyContent: 'center',
			},
			TextInput:{
				backgroundColor: "#FFF",
				height: 50,
			},
			button:{
				alignSelf: 'center',
				width: 300,
				opacity: 0.8,
				alignItems: 'center',
				justifyContent: 'center',
				marginTop: 10,
				marginBottom: 10,
				borderRadius: 8
			},
			buttonSuccess: {
				backgroundColor: "#FFC000",
				color: "#FFF",
			},
			link:{
				color:'#FFC000',
			}
	});

module.exports = Recovery;
