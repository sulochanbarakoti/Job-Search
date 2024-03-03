import axios from "axios";
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
import { MdDeleteForever } from "react-icons/md";

const AddCategory = () => {
  const [getCategory, setGetCategory] = useState([]);
  const [categoryName, setCategoryName] = useState({ category: "" });
  const [alertShow, setAlertShow] = useState(true);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3001/api/v1/add/category"
        );

        setGetCategory(res.data);
        console.log(getCategory);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, [alertShow]);

  const handleSave = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/api/v1/add/category",
        { withCredentials: true },
        categoryName
      );
      console.log(response);
      setMsg(response.data.msg);
      setAlertShow(false);
      setTimeout(() => {
        setAlertShow(true);
      }, 2000);
      setCategoryName({ category: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryName({ [name]: value.toLowerCase() });
    console.log(categoryName);
  };

  const handleDelete = async (id) => {
    console.log(id);
    if (window.confirm("Are you sure?")) {
      try {
        const response = await axios.delete(
          `http://localhost:3001/api/v1/delete/category/${id}`,
          { withCredentials: true }
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
        {" "}
        <Row>
          <h1 className="mt-5">Add Category</h1>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Name of the category: </Form.Label>
                <Form.Control
                  type="text"
                  name="category"
                  value={categoryName.category}
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
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              {getCategory.map((data, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{index + 1}</td>
                    <td>{data.category}</td>
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

export default AddCategory;
