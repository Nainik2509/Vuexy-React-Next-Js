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

import { CustomCheckboxProps } from 'src/@core/components/mui/checkbox/types'

const CustomCheckbox = (props: CustomCheckboxProps) => {
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
        <Grid container spacing={4}>
          {data.map((item, index) => {
            const { value, title, meta, gridProps, content, checkboxProps, formControlLabel } = item

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
                  <CardContent sx={{ p: theme => `${theme.spacing(4)} !important` }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <FormControlLabel
                          label=''
                          control={
                            <Checkbox
                              checked={selected.includes(value)}
                              onChange={() => handleChange(value)}
                              {...(checkboxProps ? { size: 'small', ...checkboxProps } : { size: 'small' })}
                            />
                          }
                          sx={{ mr: 0, ...(formControlLabel && formControlLabel.sx ? { ...formControlLabel.sx } : {}) }}
                        />
                        {typeof title === 'string' ? <Typography sx={{ fontWeight: 500 }}>{title}</Typography> : title}
                      </Box>
                      {meta && <Box>{typeof meta === 'string' ? <Typography>{meta}</Typography> : meta}</Box>}
                    </Box>
                    <Box sx={{ pl: 7 }}>{content ? content : null}</Box>
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

export default CustomCheckbox
