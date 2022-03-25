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

		if (firstName.startsWith('/') && firstName.endsWith('/')) {
			const id = Number(firstName.replaceAll('/', ''));
			if (Number.isInteger(id) && id > 0) {
				const employee = employees.find(m => m.employeeID === id);
				if (employee !== undefined) {
					setValue('firstName', employee.firstName);
					setValue('lastName', employee.lastName);
				}
			}
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
							You can also type <code>/id/</code> to lookup employee, available ids: {employees.map(m=> m.employeeID).join(', ')}.
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