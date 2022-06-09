// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'

import { CustomCheckboxIconsProps } from 'src/@core/components/mui/checkbox/types'

const CustomCheckboxIcons = (props: CustomCheckboxIconsProps) => {
  // ** Props
  const { data, value: userVal, onChange } = props

  // ** States
  const [selected, setSelected] = useState<string[]>(userVal || [])

  useEffect(() => {
    if (onChange) {
      onChange(selected)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const handleChange = (value: string) => {
    if (selected.includes(value)) {
      const updatedArr = selected.filter(item => item !== value)
      setSelected(updatedArr)
    } else {
      setSelected([...selected, value])
    }
  }

  const renderComponent = () => {
    return (
      <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
        <Grid container spacing={4} className='match-height'>
          {data.map((item, index) => {
            const { value, title, icon, content, gridProps, checkboxProps, formControlLabel } = item

            return (
              <Grid item key={index} {...gridProps}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    boxShadow: 'none',
                    backgroundColor: 'transparent',
                    '&:not(:first-of-type)': { ml: 4 },
                    border: theme => `1px solid ${theme.palette.divider}`,
                    ...(selected.includes(value) ? { borderColor: theme => theme.palette.primary.main } : {})
                  }}
                  onClick={() => {
                    handleChange(value)
                  }}
                >
                  <CardContent sx={{ height: '100%', p: theme => `${theme.spacing(4)} !important` }}>
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Box>
                        <Box sx={{ mb: 2 }}>{icon}</Box>
                        {typeof title === 'string' ? <Typography sx={{ fontWeight: 500 }}>{title}</Typography> : title}
                      </Box>
                      <Box sx={{ my: 2 }}>{content ? content : null}</Box>
                      <FormControlLabel
                        label=''
                        control={
                          <Checkbox
                            checked={selected.includes(value)}
                            onChange={() => handleChange(value)}
                            {...(checkboxProps
                              ? { size: 'small', sx: { p: 0 }, ...checkboxProps }
                              : { size: 'small', sx: { p: 0 } })}
                          />
                        }
                        sx={{ mx: 0, ...(formControlLabel && formControlLabel.sx ? { ...formControlLabel.sx } : {}) }}
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </FormControl>
    )
  }

  return data && data.length ? renderComponent() : null
}

export default CustomCheckboxIcons
