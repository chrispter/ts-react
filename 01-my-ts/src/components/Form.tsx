import { useForm } from '../hooks';

export const Form = () => {
    
    const { form, email, password, onChange } = useForm({
        email: 'test@test.com',
        password: '123456'
    });

    return (
        <>
            <h3>Form</h3>
            <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={ email }
                onChange={ ({ target }) => onChange( target.value , 'email')}
            />
            <input
                type="text"
                className="form-control mt-2 mb-2"
                placeholder="Password"
                value={ password }
                onChange={ ({ target }) => onChange( target.value , 'password')}
            />

            <code>
                <pre>{ JSON.stringify(form, null, 2 ) }</pre>
            </code>
        </>
    )
}
