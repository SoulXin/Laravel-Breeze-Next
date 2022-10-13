import React, { Component, Fragment } from 'react'
import { Layout } from '../../layout'
import {Button, Card, Table} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faUserXmark } from '@fortawesome/free-solid-svg-icons';
import $ from "jquery";

class Index extends Component {
  componentDidMount(){
    $(this.table).DataTable({
      processing: true,
      serverSide: true,
      responsive: true,
      bDestroy: true,
      ajax: {
          url: "http://backend.localhost/api/get-customer/",
          type: 'GET',
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
                onClick={() => this.handleDetail(rowData['id'])} 
              ><FontAwesomeIcon icon={faEdit} style={{ height: "15px" }} /></Button>
              <Button
                className="btn btn-danger mx-1"
              ><FontAwesomeIcon icon={faUserXmark} style={{ height: "15px" }} /></Button>
            </Fragment>, td
          )
        },
      }],
    });
  }

  render() {
    return (
      <Layout>
        <Card>
          <Card.Header>Customers</Card.Header>
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

export default Index