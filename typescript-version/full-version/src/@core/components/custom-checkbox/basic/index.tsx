// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

// ** Type Imports
import { CustomCheckboxBasicData, CustomCheckboxBasicProps } from 'src/@core/components/custom-checkbox/types'

const CustomCheckbox = (props: CustomCheckboxBasicProps) => {
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
        {data.map((item: CustomCheckboxBasicData, index: number) => {
          const { meta, name, title, value, content, gridProps } = item

          const renderData = () => {
            if (meta && content) {
              return (
                <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Box
                    sx={{
                      mb: 1,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between'
                    }}
                  >
                    {typeof title === 'string' ? (
                      <Typography sx={{ mr: 2, fontWeight: 500 }}>{title}</Typography>
                    ) : (
                      title
                    )}
                    {typeof meta === 'string' ? <Typography sx={{ color: 'text.secondary' }}>{meta}</Typography> : meta}
                  </Box>
                  {typeof content === 'string' ? <Typography variant='body2'>{content}</Typography> : content}
                </Box>
              )
            } else if (meta && !content) {
              return (
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  {typeof title === 'string' ? <Typography sx={{ mr: 2, fontWeight: 500 }}>{title}</Typography> : title}
                  {typeof meta === 'string' ? <Typography sx={{ color: 'text.secondary' }}>{meta}</Typography> : meta}
                </Box>
              )
            } else if (!meta && content) {
              return (
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {typeof title === 'string' ? <Typography sx={{ mb: 1, fontWeight: 500 }}>{title}</Typography> : title}
                  {typeof content === 'string' ? <Typography variant='body2'>{content}</Typography> : content}
                </Box>
              )
            } else {
              return typeof title === 'string' ? <Typography sx={{ fontWeight: 500 }}>{title}</Typography> : title
            }
          }

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
                  alignItems: 'flex-start',
                  border: theme => `1px solid ${theme.palette.divider}`,
                  ...(selected.includes(value)
                    ? { borderColor: `${color}.main` }
                    : { '&:hover': { borderColor: theme => `rgba(${theme.palette.customColors.main}, 0.3)` } })
                }}
              >
                <Checkbox
                  size='small'
                  color={color}
                  checked={selected.includes(value)}
                  onChange={() => handleChange(value)}
                  sx={{ mb: -2, mt: -1.75, ml: -1.75 }}
                  name={name ?? `${userName}-${value}`}
                />
                {renderData()}
              </Box>
            </Grid>
          )
        })}
      </Grid>
    )
  }

  return data && data.length ? renderComponent() : null
}

export default CustomCheckbox
