// ** React Imports
import { useState, useEffect, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Radio from '@mui/material/Radio'
import { Typography } from '@mui/material'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Types
import { CustomRadioBasicProps } from 'src/@core/components/mui/radio/types'

const CustomRadioBasic = (props: CustomRadioBasicProps) => {
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
          sx={{ width: '100%', flexDirection: 'row', flexWrap: 'nowrap' }}
        >
          <Grid container spacing={4} className='match-height'>
            {data.map((item, index) => {
              const { value, title, meta, content, gridProps, radioProps, formControlLabel } = item

              return (
                <Grid item key={index} {...gridProps}>
                  <Card
                    key={index}
                    sx={{
                      cursor: 'pointer',
                      boxShadow: 'none',
                      backgroundColor: 'transparent',
                      '&:not(:first-of-type)': { ml: 4 },
                      border: theme => `1px solid ${theme.palette.divider}`,
                      ...(selected === value ? { borderColor: theme => theme.palette.primary.main } : {})
                    }}
                    onClick={() => {
                      setSelected(value)
                    }}
                  >
                    <CardContent sx={{ p: theme => `${theme.spacing(4)} !important` }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <FormControlLabel
                            value={value}
                            {...(formControlLabel ? formControlLabel : { label: '' })}
                            control={<Radio {...(radioProps ? { size: 'small', ...radioProps } : { size: 'small' })} />}
                            sx={{
                              mr: 2,
                              ...(formControlLabel && formControlLabel.sx ? { ...formControlLabel.sx } : {})
                            }}
                          />
                          {typeof title === 'string' ? (
                            <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
                          ) : (
                            title
                          )}
                        </Box>
                        {meta && <Box>{typeof meta === 'string' ? <Typography>{meta}</Typography> : meta}</Box>}
                      </Box>
                      <Box sx={{ pl: 9 }}>{content ? content : null}</Box>
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

export default CustomRadioBasic
