import
{
  DataTable, Table, TableBody, TableCell, TableContainer, TableHead, TableHeader, TableRow, TableToolbarContent, TableToolbarMenu, TableToolbarSearch,


  TableBatchAction,
  TableBatchActions,
  TableToolbar,
  TableToolbarAction, Button, TableSelectAll, TableSelectRow, OverflowMenu, OverflowMenuItem

} from "carbon-components-react";
import React, { Component } from "react";
//import { this.batchActionClick, rows, headers } from './shared';


/**
 * 
 * 
 * https://github.com/carbon-design-system/carbon-components-react/blob/master/src/components/DataTable/stories/shared.js
 * https://themes.carbondesignsystem.com/component/ui-shell--navigation-with-no-icons.html
 * https://themes.carbondesignsystem.com/?nav=data-table
 * https://the-carbon-components.netlify.app/component/data-table--select.html
 * https://react.carbondesignsystem.com/?path=/docs/datatable-batch-actions--usage
 * https://www.carbondesignsystem.com/components/data-table/usage/
 */
import
{
  Delete16 as Delete,
  Save16 as Save,
  Download16 as Download,
} from '@carbon/icons-react';

export default class Accounts extends Component
{
  constructor( props )
  {
    super();

    this.setState(
      {
        rowData: [{
          "id": 1,
          "name": "Load Balancer 1	",
          "protocol": "Http	",
        }],
        headerData: [
          "Name",
          "Protocol",
        ]

      },
    );

    // this.state.rowData = [{
    //   "id": 1,
    //   "name": "Load Balancer 1	",
    //   "protocol": "Http	",
    // }];
    // this.state.headerData = [
    //   "Name",
    //   "Protocol",
    // ];

  }
  rowData = [
    {
      id: 'a',
      name: 'Load Balancer 3',
      protocol: 'HTTP',
      port: 3000,
      rule: 'Round robin',
      attached_groups: 'Kevins VM Groups',
      status: 'Disabled',
    },
    {
      id: 'b',
      name: 'Load Balancer 1',
      protocol: 'HTTP',
      port: 443,
      rule: 'Round robin',
      attached_groups: 'Maureens VM Groups',
      status: 'Starting',
    },
    {
      id: 'c',
      name: 'Load Balancer 2',
      protocol: 'HTTP',
      port: 80,
      rule: 'DNS delegation',
      attached_groups: 'Andrews VM Groups',
      status: 'Active',
    },
  ];

  headerData = [
    {
      key: 'name',
      header: 'Name',
    },
    {
      key: 'protocol',
      header: 'Protocol',
    },
    {
      key: 'port',
      header: 'Port',
    },
    {
      key: 'rule',
      header: 'Rule',
    },
    {
      key: 'attached_groups',
      header: 'Attached Groups',
    },
    {
      key: 'status',
      header: 'Status',
    },

  ];

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


    return (
      <div className="bx--grid">
        <div className="bx--row">
          <div className="bx--col-lg-12 ">
            <h2 style={ { fontWeight: "800", margin: "0 0", fontSize: "20px" } }>
              Accounts
            </h2>

            <DataTable rows={ this.rowData } headers={ this.headerData } isSortable  >
              { ( {
                rows,
                headers,
                getHeaderProps,
                getRowProps,
                getSelectionProps,
                getToolbarProps,
                getBatchActionProps,
                onInputChange,
                selectedRows,
                getTableProps,
                getTableContainerProps,
              } ) => (
                  <TableContainer
                    title=""
                    description=""
                    { ...getTableContainerProps() }>
                    <TableToolbar { ...getToolbarProps() }>
                      <TableBatchActions { ...getBatchActionProps() }>
                        <TableBatchAction
                          tabIndex={ getBatchActionProps().shouldShowBatchActions ? 0 : -1 }
                          renderIcon={ Delete }
                          onClick={ this.batchActionClick( selectedRows ) }>
                          Delete          </TableBatchAction>
                        <TableBatchAction
                          tabIndex={ getBatchActionProps().shouldShowBatchActions ? 0 : -1 }
                          renderIcon={ Save }
                          onClick={ this.batchActionClick( selectedRows ) }>
                          Save          </TableBatchAction>
                        <TableBatchAction
                          tabIndex={ getBatchActionProps().shouldShowBatchActions ? 0 : -1 }
                          renderIcon={ Download }
                          onClick={ this.batchActionClick( selectedRows ) }>
                          Download          </TableBatchAction>
                      </TableBatchActions>
                      <TableToolbarContent>
                        <TableToolbarSearch
                          defaultExpanded
                          tabIndex={ getBatchActionProps().shouldShowBatchActions ? -1 : 0 }
                          onChange={ onInputChange }
                        />
                        <TableToolbarMenu
                          tabIndex={ getBatchActionProps().shouldShowBatchActions ? -1 : 0 }>
                          <TableToolbarAction primaryFocus onClick={ () => alert( 'Alert 1' ) }>                            Action 1            </TableToolbarAction>
                          <TableToolbarAction onClick={ () => alert( 'Alert 2' ) }>                            Action 2            </TableToolbarAction>
                          <TableToolbarAction onClick={ () => alert( 'Alert 3' ) }>Action 3</TableToolbarAction>
                        </TableToolbarMenu>
                        <Button
                          tabIndex={ getBatchActionProps().shouldShowBatchActions ? -1 : 0 }
                          onClick={ this.action( 'Add new row' ) }
                          size="small"
                          kind="primary">
                          Add new
                        </Button>
                      </TableToolbarContent>
                    </TableToolbar>
                    <Table { ...getTableProps() }>
                      <TableHead>


                        <TableRow>
                          <TableSelectAll { ...getSelectionProps() } />
                          { headers.map( ( header, i ) => (
                            <TableHeader key={ i } { ...getHeaderProps( { header } ) }>
                              {header.header }
                            </TableHeader>
                          ) ) }
                          <TableHeader />
                        </TableRow>

                      </TableHead>
                      <TableBody>
                        { rows.map( ( row, i ) => (
                          <TableRow key={ i } { ...getRowProps( { row } ) }>
                            <TableSelectRow { ...getSelectionProps( { row } ) } />
                            {row.cells.map( ( cell ) => (
                              <TableCell key={ cell.id }>{ cell.value }</TableCell>
                            ) ) }
                            <TableCell className="bx--table-column-menu">

                              <OverflowMenu>
                                <OverflowMenuItem
                                  itemText="Option 1"
                                  primaryFocus
                                />
                                <OverflowMenuItem
                                  itemText="Option 2 is an example of a really long string and how we recommend handling this"
                                  requireTitle
                                />
                                <OverflowMenuItem itemText="Option 3" />
                                <OverflowMenuItem itemText="Option 4" hasDivider />
                              </OverflowMenu>

                            </TableCell>

                          </TableRow>
                        ) ) }
                      </TableBody>
                    </Table>
                  </TableContainer>
                ) }
            </DataTable>






          </div>
        </div>
      </div>
    );
  }
}
