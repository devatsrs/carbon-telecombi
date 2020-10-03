import
{
  Column,
  Dropdown,
  Form, FormGroup, Grid, Row, TextInput
} from "carbon-components-react";
import React, { Component } from "react";
import { accounts_owners } from "../../helper/faker/accounts";


export default class AccountsEdit extends Component
{

  action ( msg )
  {
    // alert(msg);
  }
  batchActionClick ( msg )
  {
    //alert(msg);
  }


  render ()
  {
    //console.log(accounts_data);
    //    console.log(accounts_data[0]);

    // const items = [
    //   {
    //     id: 'option-0',
    //     text:
    //       'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquam. Blanditiis quia nemo enim voluptatibus quos ducimus porro molestiae nesciunt error cumque quaerat, tempore vero unde eum aperiam eligendi repellendus.',
    //   },
    //   {
    //     id: 'option-1',
    //     text: 'Option 1',
    //   },
    //   {
    //     id: 'option-2',
    //     text: 'Option 2',
    //   },
    //   {
    //     id: 'option-3',
    //     text: 'Option 3',
    //   },
    //   {
    //     id: 'option-4',
    //     text: 'Option 4',
    //   },
    //   {
    //     id: 'option-5',
    //     text: 'Option 5',
    //   },
    // ];

    return (


      <div>
        <h2>AccountsName - View</h2>
        <Form onSubmit={ () => { } }>



          <Row>

            <Column>
              <FormGroup>
                <Dropdown
                  ariaLabel="Owner"
                  id="owner"
                  items={ accounts_owners }
                  label="Select an Owner"
                  titleText="Select an Owner"
                  itemToString={ ( item ) => ( item ? item.text : '' ) }

                />
              </FormGroup>
            </Column>

            <Column>
              <FormGroup>
                <TextInput
                  id="accountName"
                  invalidText="Invalid error message."
                  labelText="Full Name"
                  placeholder="Full Name"
                  rows={ 4 }
                />
              </FormGroup></Column>
          </Row>




        </Form>
      </div>
    );
  }
}
