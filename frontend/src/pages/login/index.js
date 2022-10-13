import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import {
  Button,
  Col, Container, Form, InputGroup, Row,
} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/auth'

const Login = () => {
  const router = useRouter()

  const { user, login } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (router.query.reset?.length > 0 && errors.length === 0) {
        setStatus(atob(router.query.reset))
    } else {
        setStatus(null)
    }
  });

  const submitForm = async event => {
    event.preventDefault()
    login({ email, password, setErrors, setStatus })
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center dark:bg-transparent">
      {
        !user &&
        <Container>
          <Row className="justify-content-center align-items-center px-3">
            <Col lg={8}>
              <Row>
                <Col md={7} className="bg-white border p-5 mx-auto">
                    <h1>Login</h1>
                    <p className="text-black-50">Sign In to your account</p>

                    <Form onSubmit={submitForm}>
                      <InputGroup className="mb-3">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faUser}
                            fixedWidth
                          />
                        </InputGroup.Text>
                        <Form.Control
                          name="email"
                          required
                          placeholder="Email"
                          aria-label="Email"
                          onChange={event => setEmail(event.target.value)}
                        />
                      </InputGroup>

                      <InputGroup className="mb-3">
                        <InputGroup.Text>
                          <FontAwesomeIcon
                            icon={faLock}
                            fixedWidth
                          />
                        </InputGroup.Text>
                        <Form.Control
                          type="password"
                          name="password"
                          required
                          placeholder="Password"
                          aria-label="Password"
                          onChange={event => setPassword(event.target.value)}
                        />
                      </InputGroup>

                      <Row>
                        <Col xs={6}>
                          <Button className="px-4" variant="primary" type="submit">Login</Button>
                        </Col>
                      </Row>
                    </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      }
    </div>
  )
}

export default Login