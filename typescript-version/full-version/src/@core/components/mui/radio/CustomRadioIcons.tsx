// ** React Imports
import { useState, useEffect, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import { Typography } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Types
import { CustomRadioIconsProps } from 'src/@core/components/mui/radio/types'

const CustomRadioIcons = (props: CustomRadioIconsProps) => {
  // ** Props
  const { name, data, value: userVal, onChange } = props

  // ** States
  const [selected, setSelected] = useState<null | string>(userVal || null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelected((event.target as HTMLInputElement).value)
  }

  useEffect(() => {
    if (onChange) {
      onChange(selected)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  const renderComponent = () => {
    return (
      <FormControl sx={{ width: '100%', flexDirection: 'row' }}>
        <RadioGroup
          value={selected}
          onChange={handleChange}
          name={name}
          sx={{ width: '100%', flexDirection: 'row', flexWrap: 'nowrap' }}
        >
          <Grid container spacing={4} className='match-height'>
            {data.map((item, index) => {
              const { value, title, icon, gridProps, content, radioProps, formControlLabel } = item

              return (
                <Grid item key={index} {...gridProps}>
                  <Card
                    sx={{
                      cursor: 'pointer',
                      boxShadow: 'none',
                      position: 'relative',
                      backgroundColor: 'transparent',
                      '&:not(:first-of-type)': { ml: 4 },
                      border: theme => `1px solid ${theme.palette.divider}`,
                      ...(selected === value ? { borderColor: theme => theme.palette.primary.main } : {}),
                      '& .MuiRadio-root': {
                        pr: 0
                      }
                    }}
                    onClick={() => {
                      setSelected(value)
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
                          {typeof title === 'string' ? (
                            <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
                          ) : (
                            title
                          )}
                        </Box>
                        <Box sx={{ my: 2 }}>{content ? content : null}</Box>
                        <FormControlLabel
                          value={value}
                          {...(formControlLabel ? formControlLabel : { label: '' })}
                          control={
                            <Radio
                              {...(radioProps
                                ? { size: 'small', sx: { p: 0 }, ...radioProps }
                                : { size: 'small', sx: { p: 0 } })}
                            />
                          }
                          sx={{
                            mx: 0,
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
        </RadioGroup>
      </FormControl>
    )
  }

  return data && data.length ? renderComponent() : null
}

export default CustomRadioIcons
