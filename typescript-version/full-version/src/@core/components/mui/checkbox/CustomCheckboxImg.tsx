// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'

import { CustomCheckboxImgProps } from 'src/@core/components/mui/checkbox/types'

const CustomCheckboxImg = (props: CustomCheckboxImgProps) => {
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
            const { value, img, gridProps, checkboxProps, formControlLabel } = item

            return (
              <Grid item key={index} {...gridProps}>
                <Card
                  sx={{
                    height: '100%',
                    cursor: 'pointer',
                    boxShadow: 'none',
                    position: 'relative',
                    backgroundColor: 'transparent',
                    '&:not(:first-of-type)': { ml: 4 },
                    border: theme => `2px solid ${theme.palette.divider}`,
                    ...(selected.includes(value)
                      ? { borderColor: theme => theme.palette.primary.main }
                      : {
                          '&:not(:hover)': {
                            '& .MuiFormControlLabel-root': {
                              display: 'none'
                            }
                          }
                        })
                  }}
                  onClick={() => {
                    handleChange(value)
                  }}
                >
                  <CardContent sx={{ height: '100%', p: '0 !important' }}>
                    <Box
                      sx={{
                        height: '100%',
                        display: 'flex',
                        textAlign: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        '& img': {
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }
                      }}
                    >
                      {typeof img === 'string' ? <img src={img} alt={`${value}-${index}`} /> : img}
                      <FormControlLabel
                        label=''
                        control={
                          <Checkbox
                            disableRipple
                            checked={selected.includes(value)}
                            onChange={() => handleChange(value)}
                            {...(checkboxProps ? { size: 'small', ...checkboxProps } : { size: 'small' })}
                          />
                        }
                        sx={{
                          mr: 0,
                          top: 0,
                          right: 0,
                          position: 'absolute',
                          ...(formControlLabel && formControlLabel.sx ? { ...formControlLabel.sx } : {})
                        }}
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

export default CustomCheckboxImg
