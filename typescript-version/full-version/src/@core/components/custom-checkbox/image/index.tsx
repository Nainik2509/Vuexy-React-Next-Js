// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'

// ** Type Imports
import { CustomCheckboxImgData, CustomCheckboxImgProps } from 'src/@core/components/custom-checkbox/types'

const CustomCheckboxImg = (props: CustomCheckboxImgProps) => {
  // ** Props
  const { data, name: userName, onChange, value: userVal, color = 'primary' } = props

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
      <Grid container spacing={4}>
        {data.map((item: CustomCheckboxImgData, index: number) => {
          const { alt, img, name, value, gridProps } = item

          return (
            <Grid item key={index} {...gridProps}>
              <Box
                onClick={() => handleChange(value)}
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
                  '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  },
                  ...(selected.includes(value)
                    ? { borderColor: `${color}.main` }
                    : {
                        '&:hover': { borderColor: theme => `rgba(${theme.palette.customColors.main}, 0.3)` },
                        '&:not(:hover)': {
                          '& .MuiCheckbox-root': { display: 'none' }
                        }
                      })
                }}
              >
                {typeof img === 'string' ? <img src={img} alt={alt ?? `checkbox-image-${value}`} /> : img}
                <Checkbox
                  size='small'
                  color={color}
                  checked={selected.includes(value)}
                  onChange={() => handleChange(value)}
                  name={name ?? `${userName}-${value}`}
                  sx={{ top: 0, right: 0, position: 'absolute' }}
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

export default CustomCheckboxImg
