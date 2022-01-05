// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from 'src/@core/components/card-snippet'

// ** Hooks Imports
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Components Imports
import TreeViewBasic from 'src/components/components/tree-view/TreeViewBasic'
import TreeViewControlled from 'src/components/components/tree-view/TreeViewControlled'
import TreeViewRichObject from 'src/components/components/tree-view/TreeViewRichObject'
import TreeViewCustomized from 'src/components/components/tree-view/TreeViewCustomized'
import TreeViewMultiSelection from 'src/components/components/tree-view/TreeViewMultiSelection'

// import TreeViewGmailClone from 'src/components/components/tree-view/TreeViewGmailClone'

// ** Source code imports
import * as source from 'src/sourceCodes/components/TreeViewSourceCode'

const TreeView = () => {
  // ** Hooks
  const { settings } = useSettings()

  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Basic Tree View' code={source.TreeViewBasicCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>TreeView</code> & <code>TreeItem</code> components and <code>defaultCollapseIcon</code> &{' '}
            <code>defaultExpandIcon</code> props with <code>TreeView</code> component for a simple tree view.
          </Typography>
          <TreeViewBasic direction={settings.direction} />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Multi Selection' code={source.TreeViewMultiSelectionCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>multiSelect</code> prop for multiple selection in a tree view.
          </Typography>
          <TreeViewMultiSelection direction={settings.direction} />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Controlled Tree View' code={source.TreeViewControlledCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Manage <code>expanded</code>, <code>selected</code>, <code>onNodeToggle</code> and <code>onNodeSelect</code>{' '}
            props with the help of states.
          </Typography>
          <TreeViewControlled direction={settings.direction} />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Rich Object' code={source.TreeViewRichObjectCode}>
          <Typography sx={{ marginBottom: 4 }}>
            <code>TreeView</code> and <code>TreeItem</code> components can also use APIs. Use an object and recursion
            can be used to handle it.
          </Typography>
          <TreeViewRichObject direction={settings.direction} />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Customized Tree View' code={source.TreeViewCustomizedCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>styled</code> hook to customize your tree view.
          </Typography>
          <TreeViewCustomized />
        </CardSnippet>
      </Grid>
      {/* <Grid item xs={12} md={6}>
        <CardSnippet title='Gmail Clone' code={source.TreeViewGmailCloneCode}>
          <TreeViewGmailClone direction={settings.direction} />
        </CardSnippet>
      </Grid> */}
    </Grid>
  )
}

export default TreeView
