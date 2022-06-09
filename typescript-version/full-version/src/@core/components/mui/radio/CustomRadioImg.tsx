// ** React Imports
import { useState, useEffect, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Types
import { CustomRadioImgProps } from 'src/@core/components/mui/radio/types'

const CustomRadioImg = (props: CustomRadioImgProps) => {
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
          name={name}
          value={selected}
          onChange={handleChange}
          sx={{ flexDirection: 'row', flexWrap: 'nowrap' }}
        >
          <Grid container spacing={4}>
            {data.map((item, index) => {
              const { value, img, radioProps, gridProps, formControlLabel } = item

              return (
                <Grid item key={index} {...gridProps}>
                  <Card
                    sx={{
                      height: '100%',
                      cursor: 'pointer',
                      boxShadow: 'none',
                      backgroundColor: 'transparent',
                      '&:not(:first-of-type)': { ml: 4 },
                      border: theme => `2px solid ${theme.palette.divider}`,
                      ...(selected === value ? { borderColor: theme => theme.palette.primary.main } : {}),
                      '& .MuiRadio-root': {
                        pr: 0
                      }
                    }}
                    onClick={() => {
                      setSelected(value)
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
                          value={value}
                          {...(formControlLabel ? formControlLabel : { label: '' })}
                          control={
                            <Radio
                              {...(radioProps
                                ? { size: 'small', inputProps: { hidden: true }, ...radioProps }
                                : { size: 'small', inputProps: { hidden: true } })}
                            />
                          }
                          sx={{
                            mr: 2,
                            zIndex: '-1',
                            visibility: 'hidden',
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
        </RadioGroup>
      </FormControl>
    )
  }

  return data && data.length ? renderComponent() : null
}

export default CustomRadioImg
