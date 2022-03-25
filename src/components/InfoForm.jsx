import { useState, useEffect } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export const InfoForm = () => {
	const [formData, setFormData] = useState({});
	const [employees, setEmployees] = useState([]);
	const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm({
		defaultValues: {
			department: 'Sales'
		}
	});

	useEffect(() => {
		(async () => {
			const response = await fetch('http://localhost:5000/employees');
			const employees = await response.json();
			setEmployees(employees);
		})();
	}, []);

	useEffect(() => {
		const firstName = watch('firstName');
		switch (firstName) {
			case '/2':
				setValue('firstName', employees[0].firstName);
				setValue('lastName', employees[0].lastName);
				break;
			case '/5':
				setValue('firstName', employees[1].firstName);
				setValue('lastName', employees[1].lastName);
				break;
		}
	}, [watch('firstName')]);

	return (
		<Card className="mt-4">
			<Card.Body>
				<form onSubmit={handleSubmit((data) => {
					setFormData(data);
				})}>
					<Form.Group className="mb-3">
						<Form.Label>First Name</Form.Label>
						<input className="app-input" type="text" {...register("firstName", { required: 'Please enter a first name.', minLength: { value: 4, message: "First name must have at least 4 characters." } })} />
						<Form.Text className="text-muted">
							You can also type <code>/id-number</code> to lookup employee.
						</Form.Text>
						<Form.Text className="text-muted">
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
						<input className="app-input" type="text" {...register("department", { required: 'Please enter a department.' })} />
						<Form.Text className="text-muted">
							<div>{errors.department?.message}</div>
						</Form.Text>
					</Form.Group>

					<Button disabled={Object.keys(errors).length} variant="primary" type="submit">
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