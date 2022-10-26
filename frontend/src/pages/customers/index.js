import React, { Component, Fragment } from 'react'
import { Layout } from '../../layout'
import {Button, Card, Table} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";
import { withRouter } from 'next/router';
import { toast } from "react-toastify";
import axios from 'axios';

class Index extends Component {
  componentDidMount(){
    const reactComponent = this;

    $(this.table).DataTable({
      processing: true,
      serverSide: true,
      responsive: true,
      bDestroy: true,
      ajax: {
        url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/customers`,
        type: 'GET',
        headers: {
          'X-Requested-With':'XMLHttpRequest',
        },
        xhrFields: {
          withCredentials: true
        },
      },
      columns: [
          {
            data: null,
            render: function (data, type, row, meta) {
                return meta.row + meta.settings._iDisplayStart + 1;
            },
            orderable: false,
            searchable: false
          },
          {
            data: "name",
            searchable: true,
            orderable: false,
          },
          {
            data: "address",
            searchable: true,
            orderable: false,
          },
          {
            data: "phone",
            searchable: true,
            orderable: false,
          },
          {
            data: "city",
            searchable: true,
            orderable: false,
          },
          {
            data: "pos_code",
            searchable: true,
            orderable: false,
          },
          {
            data: null,
            width: "20%"
          }
      ],
      columnDefs: [{
        targets: 6,
        createdCell: (td, cellData, rowData, row, col) => {
          ReactDOM.render(
            <Fragment>
              <Button 
                className="btn btn-success mx-1"
                onClick={() => reactComponent.props.router.push(`/customers/detail/${rowData['id']}`)} 
              ><FontAwesomeIcon icon={faEdit} style={{ height: "15px" }} /></Button>
              <Button
                className="btn btn-danger mx-1"
                onClick={() => this.handleDelete(rowData['id'])} 
              ><FontAwesomeIcon icon={faUserXmark} style={{ height: "15px" }} /></Button>
            </Fragment>, td
          )
        },
      }],
    });
  }

  async handleDelete(id) {
    let isExecuted = confirm(`Are you sure to delete this produk with ID: ${id}?`);
    if (isExecuted == true) {
      try {
        const response = await axios.delete(`/api/customers/${id}`);
        $(this.table).DataTable().ajax.reload();
        toast.success(response.data.message);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  render() {
    return (
      <Layout>
        <Card>
          <Card.Header>
            Customers
            <Button 
              type='button' 
              className='btn btn-primary float-end'
              onClick={() => this.props.router.push(`/customers/add`)}
            >Add</Button>
          </Card.Header>

          <Card.Body>
            <Table responsive hover ref={(table) => (this.table = table)}>
              <thead>
                <tr>
                  <td>No</td>
                  <td>Name</td>
                  <td>Address</td>
                  <td>Phone</td>
                  <td>City</td>
                  <td>Pos Code</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody></tbody>
            </Table>
          </Card.Body>
        </Card>
      </Layout>
    )
  }
}

export async function getStaticProps() {
  return {
    props: {
      auth: true
    },
  }
}

export default withRouter(Index)