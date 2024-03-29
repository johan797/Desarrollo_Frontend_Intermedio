import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux'

const Paso4 = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const validacionPaso4 = Yup.object({
        biografia: Yup.string().required('La biografia es requerida')        
    });

    const formik = useFormik({
        initialValues: {
            biografia: "",
        },
        validationSchema: validacionPaso4,
        onSubmit: (values) => { 
            dispatch( {
                type: 'AGREGAR', 
                payload: values});
            navigate("/paso5") }
    });


    return (
        <div>
            <h2>Paso 4. Biografia</h2>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="biografia">
                    <Form.Label>Biografia</Form.Label>
                    <Form.Control
                        name="biografia"
                        as="textarea"
                        value={formik.values.biografia}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Ingrese la empresa en la que labora"
                        isInvalid={!!formik.errors.biografia && formik.touched.biografia}
                    />
                    <Form.Control.Feedback type="invalid">
                        {formik.errors.biografia}
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">Siguiente</Button>
            </Form>
        </div>
    );


};

export default Paso4;