import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { InputGroup, Row, Col, Button, Alert } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Form.css';

function Formm() {
    const [displayform, setDisplay] = useState(true);
    const [em_value, setEmValue] = useState('');
    const [nm_value, setNmValue] = useState('');
    const [ph_value, setPhValue] = useState();
    const [checked_val, setCheckBoxChecked] = useState([]);
    const [error_msg, setErrorMsg] = useState('Please enter the value for the above field');

    const handleOnChange = (isChecked, value) => {
        let temp = [...checked_val];
        var pre = value.split('_')[0];
        if (isChecked) {
            temp = temp.filter(item => item.split('_')[0] !== pre);
            temp.push(value);
            setCheckBoxChecked(temp);
            return;
        }

        setCheckBoxChecked(temp.filter(item => item !== value));
    };

    const validateForm = () => {
        setErrorMsg('Please enter the value for the above field');
        [...document.getElementsByClassName('formm-alert-danger')].forEach(element => {
            element.style.display = "none";
        });
        if (nm_value === '') {
            document.getElementById('formm-name_er').style.display = "block";
        } else if (em_value === '') {
            document.getElementById('formm-email_er').style.display = "block";
        } else if (!em_value.includes('.com') || (!em_value.includes('@'))) {
            document.getElementById('formm-email_er').style.display = "block";
            setErrorMsg('Invalid Email');
        } else if (!ph_value) {
            document.getElementById('formm-phone_er').style.display = "block";
        } else if (ph_value.length < 13) {
            document.getElementById('formm-phone_er').style.display = "block";
            setErrorMsg('Invalid Phone number');
        } else if (checked_val.length < Object.keys(feedback_type).length) {
            let keys = Object.keys(feedback_type);
            checked_val.forEach(val => {
                keys = keys.filter(item => item !== val.split('_')[0]);
            });
            keys.forEach(val => {
                document.getElementById('formm-er_' + val).style.display = "block";
            });
        } else return true;
    };

    const formSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
            var new_id = 0;
            if (existingEntries == null) existingEntries = [];
            else {
                let lastentry = existingEntries.slice(-1)[0];
                new_id = parseInt(lastentry["id"]) + 1;
            }
            var entry = {
                "id": new_id,
                "email": em_value,
                "name": nm_value,
                "phone": ph_value,
                "checkbox_values": checked_val,
            };
            // Save allEntries back to local storage
            existingEntries.push(entry);
            localStorage.setItem("allEntries", JSON.stringify(existingEntries));
            setDisplay(false);
        }
    };

    const feedback_type = {
        'qos': 'Outfit Size',
    };
    const feedbackup = {
        'qos': 'Proof of Purchase',
    };

    const feedback_opts = ['XS', 'S', 'M', 'L', 'XL'];
    const feedback = ['Invoice/Bill', 'Email', 'Transaction', 'Other'];

    return (
        <Container className="formm-cont">
            {displayform ?
                (<Card className="formm-contact-page">
                    <Card.Header>
                        <cite title="Source Title">You can now cash in on your wardrobe by listing your designer wear on our website to sell, we charge a 20% commission on all sales</cite>
                    </Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            Please fill .
                        </blockquote>
                    </Card.Body>
                    <Container className="formm-padding30px">
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="formm-required-field">Full Name</Form.Label>
                                        <Form.Control type="text" required placeholder="E.g. jon snow" value={nm_value} onChange={e => setNmValue(e.target.value)} />
                                    </Form.Group>
                                    <Alert variant='danger' id='formm-name_er'>
                                        &#9432;{error_msg}
                                    </Alert>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="formm-required-field">Email address</Form.Label>
                                        <Form.Control type="email" required placeholder="E.g. abc@gmail.com" value={em_value} onChange={e => setEmValue(e.target.value)} />
                                    </Form.Group>
                                    <Alert variant='danger' id='formm-email_er'>
                                        &#9432;{error_msg}
                                    </Alert>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label className="formm-required-field">Contact number</Form.Label>
                                        <InputGroup>
                                            <PhoneInput
                                                className="formm-PhoneInput"
                                                value={ph_value}
                                                onChange={setPhValue}
                                                defaultCountry="US"
                                                international
                                            />
                                        </InputGroup>
                                    </Form.Group>
                                    <Alert variant='danger' id='formm-phone_er'>
                                        &#9432;{error_msg}
                                    </Alert>
                                </Col>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="formm-required-field">Which city is the outfit in?</Form.Label>
                                            <Form.Control type="text" value={em_value} onChange={e => setEmValue(e.target.value)} />
                                        </Form.Group>
                                        <Alert variant='danger' id='formm-email_er'>
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="formm-required-field">Desiger of the outfit</Form.Label>
                                            <Form.Control type="text" value={em_value} onChange={e => setEmValue(e.target.value)} />
                                        </Form.Group>
                                        <Alert variant='danger' id='formm-email_er'>
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label className="formm-required-field">Product description(i.e,material,colour,type of outfit)</Form.Label>
                                            <Form.Control type="text" value={em_value} onChange={e => setEmValue(e.target.value)} />
                                        </Form.Group>
                                        <Alert variant='danger' id='formm-email_er'>
                                            &#9432;{error_msg}
                                        </Alert>
                                    </Col>
                                </Row>
                                <Col></Col>
                            </Row>
                            <Row>
                                {Object.keys(feedback_type).map((ty) => (
                                    <>
                                        <Col>
                                            <Form.Group className="mb-3" controlId={ty}>
                                                <Form.Label className="formm-required-field">{feedback_type[ty]}</Form.Label>
                                                <InputGroup>
                                                    <div className="mb-3">
                                                        {feedback_opts.map((opt, key) => (
                                                            <Form.Check
                                                                inline
                                                                label={opt}
                                                                name={`${ty}_feedback_opts`}
                                                                id={`${ty}_${key}`}
                                                                checked={checked_val.includes(ty + '_' + opt)}
                                                                onChange={e => handleOnChange(e.target.checked, ty + '_' + opt)}
                                                                type='checkbox'
                                                                value={opt}
                                                                className="formm-form-check-input"
                                                            />
                                                        ))}
                                                    </div>
                                                </InputGroup>
                                            </Form.Group>
                                            <Alert variant='danger' id={`formm-er_${ty}`}>
                                                &#9432;{error_msg}
                                            </Alert>
                                        </Col>
                                        {((ty === 'qos') ?
                                            <Col>
                                                <Form.Group className="mb-3" controlId={ty}>
                                                    <Form.Label className="formm-required-field">{feedbackup[ty]}</Form.Label>
                                                    <InputGroup>
                                                        <div className="mb-3">
                                                            {feedback.map((opt, key) => (
                                                                <Form.Check
                                                                    inline
                                                                    label={opt}
                                                                    name={`${ty}_feedbackup`}
                                                                    id={`${ty}_${key}`}
                                                                    checked={checked_val.includes(ty + '_' + opt)}
                                                                    onChange={e => handleOnChange(e.target.checked, ty + '_' + opt)}
                                                                    type='checkbox'
                                                                    value={opt}
                                                                    className="formm-form-check-input"
                                                                />
                                                            ))}
                                                        </div>
                                                    </InputGroup>
                                                </Form.Group>
                                                <Alert variant='danger' id={`formm-er_${ty}`}>
                                                    &#9432;{error_msg}
                                                </Alert>
                                            </Col> : null)}
                                    </>
                                ))}
                            </Row>
                            <Button variant="primary" onClick={formSubmit} className="formm-btn_purp">
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Card>) :
                <Card>
                    <Card.Header>
                        <cite title="Source Title">Form Submitted successfully</cite>
                    </Card.Header>
                </Card>
            }
        </Container>
    );
}

export default Formm;
