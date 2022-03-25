import { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const InfoForm = () => {
	const [formData, setFormData] = useState({});
	const { register, handleSubmit, formState: {errors} } = useForm();
	console.log(errors);
	return (
		<Card className="mt-4">
			<Card.Body>
				<form onSubmit={handleSubmit((data) => {
					setFormData(data);
				})}>
					<Form.Group className="mb-3">
						<Form.Label>First Name</Form.Label>
						<input className="app-input" type="text" {...register("firstName", { required: 'Please enter a first name.' })} />
						<Form.Text className="text-muted">
							You can also type <code>/id-number</code> to lookup employee.
						</Form.Text>
						<Form.Text className="text-muted"></Form.Text>
							<div>{errors.firstName?.message}</div>
						</Form.Text>
					</Form.Group>
					
					<Form.Group className="mb-3">
						<Form.Label>Last Name</Form.Label>
						<input className="app-input" type="text" {...register("lastName", { required: 'Please enter a last name.' })} />
						<Form.Text className="text-muted">
							<div>{errors.lastName?.message}</div>
						</Form.Text>
					</Form.Group>

					<Form.Group className="mb-3">
						<Form.Label>Department</Form.Label>
						<Form.Control type="text" />
					</Form.Group>
					<Button variant="primary" type="submit">
						Submit
					</Button>

					{Object.keys(formData).length > 0 && (
						<div className="formData"><pre>{JSON.stringify(formData, null, 2)}</pre></div>
					)}
				</form>
			</Card.Body>
		</Card>
	)
}