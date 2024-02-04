import React, { useEffect, useState } from "react";
import {
  Col,
  Row,
  Container,
  Form,
  Button,
  Alert,
  Table,
} from "react-bootstrap";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";

const AddCity = () => {
  const [getCity, setGetCity] = useState([]);
  const [cityName, setCityName] = useState({ city: "" });
  const [alertShow, setAlertShow] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/add/city"
        );
        console.log(response.data);
        setGetCity(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [alertShow]);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/add/city",
        cityName
      );
      setMsg(response.data.msg);
      setAlertShow(false);
      setTimeout(() => {
        setAlertShow(true);
      }, 2000);
      setCityName({ city: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCityName({ [name]: value });
    console.log(cityName);
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/api/v1/delete/city/${id}`
        );
        setMsg(response.data.msg);
        setAlertShow(false);
        setTimeout(() => {
          setAlertShow(true);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Container id="add-category">
      <Row>
        <Row>
          <h1 className="mt-5">Add City</h1>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Name of the City: </Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={cityName.city}
                  onChange={handleChange}
                  placeholder="Enter name"
                />
              </Form.Group>
            </Form>
            <Button className="btn-success mt-3 mb-2" onClick={handleSave}>
              Save
            </Button>
            <Alert style={{ width: "auto" }} hidden={alertShow}>
              {msg}
            </Alert>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>S.N</th>
                  <th>City</th>
                  <th>Action</th>
                </tr>
              </thead>
              {getCity.map((data, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.city}</td>
                    <td>
                      <Button
                        className="btn-danger btn-sm"
                        onClick={() => handleDelete(data._id)}
                      >
                        <MdDeleteForever size={16} className="md-3" />
                        Delete
                      </Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default AddCity;
