// ** React Imports
import { FC } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import CardSnippet from '@core/components/card-snippet'

// ** Demo Components Imports
import ChipsIcon from './ChipsIcon'
import ChipsSizes from './ChipsSizes'
import ChipsArray from './ChipsArray'
import ChipsLight from './ChipsLight'
import ChipsColors from './ChipsColors'
import ChipsAvatar from './ChipsAvatar'
import ChipsVariants from './ChipsVariants'
import ChipsDisabled from './ChipsDisabled'
import ChipsOnDelete from './ChipsOnDelete'
import ChipsClickable from './ChipsClickable'

// ** Source code imports
import * as source from './ChipsSourceCode'

const Pagination: FC = () => {
  return (
    <Grid container spacing={6} className='match-height'>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Chip Variants' code={source.ChipsVariantsCode}>
          <Typography>
            Use <code>variant='outlined'</code> prop with <code>Chip</code> component for outlined chip.
          </Typography>
          <ChipsVariants />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Disabled Chips' code={source.ChipsDisabledCode}>
          <Typography>
            Use <code>disabled</code> prop for disabled chip.
          </Typography>
          <ChipsDisabled />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Colors' code={source.ChipsColorsCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>color</code> prop for different colored chips.
          </Typography>
          <ChipsColors />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='onDelete' code={source.ChipsOnDeleteCode}>
          <Typography sx={{ marginBottom: 4 }}>
            Use <code>onDelete</code> prop for delete icon in a chip. Use <code>deleteIcon</code> prop to change the
            default delete icon.
          </Typography>
          <ChipsOnDelete />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Chip Sizes' code={source.ChipsSizesCode}>
          <Typography>
            Use <code>size='small'</code> prop for small chip.
          </Typography>
          <ChipsSizes />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Clickable Chip' code={source.ChipsClickableCode}>
          <Typography>
            You can make any chip clickable by adding <code>clickable</code> prop and use <code>component='a'</code> to
            make it a link.
          </Typography>
          <ChipsClickable />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Chip with Avatar' code={source.ChipsAvatarCode}>
          <Typography>
            Use <code>Avatar</code> component inside <code>avatar</code> prop for a chip with avatar.
          </Typography>
          <ChipsAvatar />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} md={6}>
        <CardSnippet title='Icon Chip' code={source.ChipsIconCode}>
          <Typography>
            Use <code>icon</code> prop for an icon inside a chip.
          </Typography>
          <ChipsIcon />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Chips Array' code={source.ChipsArrayCode}>
          <Typography>You can make a list of chips that can make some or all chips deletable.</Typography>
          <ChipsArray />
        </CardSnippet>
      </Grid>
      <Grid item xs={12}>
        <CardSnippet title='Custom Light Chips' code={source.ChipsLightCode}>
          <Typography>
            If you want to use light variant of the chips, you need to use our custom component with{' '}
            <code>skin='light'</code> prop.
          </Typography>
          <ChipsLight />
        </CardSnippet>
      </Grid>
    </Grid>
  )
}

export default Pagination
