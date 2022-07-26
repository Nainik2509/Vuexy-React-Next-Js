// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// ** Type Imports
import { CustomCheckboxIconsData, CustomCheckboxIconsProps } from 'src/@core/components/custom-checkbox/types'

const CustomCheckboxIcons = (props: CustomCheckboxIconsProps) => {
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
        {data.map((item: CustomCheckboxIconsData, index: number) => {
          const { icon, name, title, value, content, gridProps } = item

          return (
            <Grid item key={index} {...gridProps}>
              <Box
                onClick={() => handleChange(value)}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  borderRadius: 1,
                  cursor: 'pointer',
                  position: 'relative',
                  alignItems: 'center',
                  flexDirection: 'column',
                  border: theme => `1px solid ${theme.palette.divider}`,
                  ...(selected.includes(value)
                    ? { borderColor: `${color}.main` }
                    : { '&:hover': { borderColor: theme => `rgba(${theme.palette.customColors.main}, 0.3)` } })
                }}
              >
                {icon}
                {content ? (
                  <>
                    {typeof title === 'string' ? (
                      <Typography sx={{ mb: 1, fontWeight: 500 }}>{title}</Typography>
                    ) : (
                      title
                    )}
                    {typeof content === 'string' ? (
                      <Typography variant='body2' sx={{ my: 'auto', textAlign: 'center' }}>
                        {content}
                      </Typography>
                    ) : (
                      content
                    )}
                  </>
                ) : typeof title === 'string' ? (
                  <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
                ) : (
                  title
                )}
                <Checkbox
                  size='small'
                  color={color}
                  sx={{ mb: -2 }}
                  checked={selected.includes(value)}
                  onChange={() => handleChange(value)}
                  name={name ?? `${userName}-${value}`}
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

export default CustomCheckboxIcons
