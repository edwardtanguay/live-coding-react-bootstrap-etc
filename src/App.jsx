// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.dark.min.css';
// import './styles/bootstrap.sketchy.min.css';
import './styles/App.scss'
import { Button, Container } from 'react-bootstrap';
import { CarouselExample } from './components/CarouselExample';
import { InfoForm } from './components/InfoForm';

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Info</h1>
				<Button variant="success">Submit</Button>
				<Button className="ms-2" disabled variant="danger">Delete User</Button>
				<Button className="ms-2" size="lg" variant="outline-info" >Delete User</Button>
			<hr/>
			<CarouselExample/>
			<InfoForm/>
			</Container>
		</div>
	)
}

export default App
