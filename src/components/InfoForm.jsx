import { Form, Button, Card } from 'react-bootstrap';

export const InfoForm = () => {
	return (
		<Card className="mt-4">
			<Card.Body>
				<Form>
					<Form.Group className="mb-3">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text" />
						<Form.Text className="text-muted">
							You can also type <code>/id-number</code> to lookup employee.
						</Form.Text>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text" />
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Department</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</Form>
			</Card.Body>
		</Card>
	)
}