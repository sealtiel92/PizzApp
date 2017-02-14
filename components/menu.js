import { Component } from "react";
import { Dimensions, StyleSheet, ScrollView, View, Image,} from 'react-native';
import { Container, Content, Header, Title, Thumbnail, Icon, List, Grid, Col, InputGroup, Input, ListItem, Text } from 'native-base';

const React = require('react');
const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

class Menu extends Component {

	constructor(props){
		super(props);
	}
	
	static propTypes = {
		onItemSelected: React.PropTypes.func.isRequired,
	};

	render() {
		return (
		<ScrollView scrollsToTop={false} style={styles.menu}>     
			<List>
				<ListItem style={{margin: 10, paddingLeft: 5}}>
						<Image
							style={styles.avatar}
							source={{ uri, }}/>
						<Text style={styles.name}>PizzApp</Text>
				</ListItem>
				<ListItem
					style={{margin: 5, paddingLeft: 5}} 
					onPress={() => this.props.onItemSelected('Inicio')}>
					<Text
						style={styles.item}>
						Inicio
					</Text>
				</ListItem>
				<ListItem
					style={{margin: 5, paddingLeft: 5}} 
					onPress={() => this.props.onItemSelected('Pedidos')}>
					<Text
						style={styles.item}>
						Pedidos
					</Text>
				</ListItem>
				<ListItem 
					style={{margin: 5, paddingLeft: 5}} 
					onPress={() => this.props.onItemSelected('Perfil')}>
					<Text
						style={styles.item}>
						Perfil
					</Text>
				</ListItem>
				<ListItem
					style={{margin: 5, paddingLeft: 5}} 
					onPress={() => this.props.onItemSelected('Salir')}>
					<Text
						style={styles.item}>
						Salir
					</Text>
				</ListItem>
			</List>
		</ScrollView>
		);
	}
};

const styles = StyleSheet.create({
	menu: {
	flex: 1,
	width: window.width,
	height: window.height,
	backgroundColor: '#f0f0f0',
	},
	avatarContainer: {
	padding: 20,
	width: window.width,
	height: window.height/6,
	backgroundColor: '#0035C6'
	},
	avatar: {
	width: 48,
	height: 48,
	borderRadius: 24,
	},
	name: {
	position: 'absolute',
	left: 70,
	top: 20,
	color: '#fff'
	},
	item: {
	fontSize: 14,
	fontWeight: '300',
	padding: 10,
	margin: 5,
	backgroundColor: '#e9e9e9'
	},
});

module.exports = Menu;