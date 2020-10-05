import {
  Column,
  Dropdown,
  Form,
  FormGroup,
  Grid,
  Row,
  TextInput,
} from "carbon-components-react";
import React, { Component } from "react";
import { accounts_owners } from "../../helper/faker/accounts";

export default class AccountsEdit extends Component {
  action(msg) {
    // alert(msg);
  }
  batchActionClick(msg) {
    //alert(msg);
  }

  render() {
    return (
      <div>
        <h2>Account Edit</h2>
        <Form onSubmit={() => {}}>
          <Row>
            <Column>
              <FormGroup>
                <Dropdown
                  ariaLabel="Owner"
                  id="owner"
                  items={accounts_owners}
                  label="Select an Owner"
                  titleText="Select an Owner"
                  itemToString={(item) => (item ? item.text : "")}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <TextInput
                  id="FullName"
                  invalidText="Invalid error message."
                  labelText="Full Name"
                  placeholder="Full Name"
                  rows={4}
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column>
              <FormGroup>
                <TextInput
                  id="accountName"
                  invalidText="Invalid error message."
                  labelText="Account Name"
                  placeholder="Account Name"
                  rows={4}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <TextInput
                  id="accountNumber"
                  invalidText="Invalid error message."
                  labelText="Gateway Account Number"
                  placeholder="Account Number"
                  rows={4}
                />
              </FormGroup>
            </Column>
          </Row>
          <Row>
            <Column>
              <FormGroup>
                <TextInput
                  id="Email"
                  invalidText="Invalid error message."
                  labelText="Email"
                  placeholder="Email"
                  rows={4}
                />
              </FormGroup>
            </Column>
            <Column>
              <FormGroup>
                <TextInput
                  id="BillingEmail"
                  invalidText="Invalid error message."
                  labelText="Billing Email"
                  placeholder="Billing Email"
                  rows={4}
                />
              </FormGroup>
            </Column>
          </Row>
        </Form>
      </div>
    );
  }
}
