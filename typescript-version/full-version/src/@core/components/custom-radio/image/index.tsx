// ** React Imports
import { useState, useEffect, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'

// ** Type Imports
import { CustomRadioImgData, CustomRadioImgProps } from 'src/@core/components/custom-radio/types'

const CustomRadioImg = (props: CustomRadioImgProps) => {
  // ** Props
  const { name, data, onChange, value: userVal, color = 'primary' } = props

  // ** States
  const [selected, setSelected] = useState<string | null>(userVal || null)

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
      <Grid container spacing={4}>
        {data.map((item: CustomRadioImgData, index: number) => {
          const { alt, img, value, gridProps } = item

          return (
            <Grid item key={index} {...gridProps}>
              <Box
                onClick={() => setSelected(value)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  borderRadius: 1,
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  border: theme => `2px solid ${theme.palette.divider}`,
                  ...(selected === value
                    ? { borderColor: `${color}.main` }
                    : { '&:hover': { borderColor: theme => `rgba(${theme.palette.customColors.main}, 0.3)` } }),
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }}
              >
                {typeof img === 'string' ? <img src={img} alt={alt ?? `radio-image-${value}`} /> : img}
                <Radio
                  name={name}
                  size='small'
                  value={value}
                  onChange={handleChange}
                  checked={selected === value}
                  sx={{ zIndex: -1, position: 'absolute', visibility: 'hidden' }}
                />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    )
  }

  return data && data.length ? renderComponent() : null
}

export default CustomRadioImg
