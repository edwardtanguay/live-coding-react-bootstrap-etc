import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Button, Container } from 'react-bootstrap';

function App() {
	return (
		<div className="App">
			<Container>
				<h1>Info</h1>
				<Button variant="success">Submit</Button>
				<Button className="ms-2" disabled variant="danger">Delete User</Button>
				<Button className="ms-2" size="lg" variant="outline-info" >Delete User</Button>
			</Container>
		</div>
	)
}

export default App
