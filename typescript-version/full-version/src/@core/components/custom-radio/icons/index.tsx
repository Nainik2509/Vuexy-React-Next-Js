// ** React Imports
import { useState, useEffect, ChangeEvent } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Typography from '@mui/material/Typography'

// ** Type Imports
import { CustomRadioIconsProps } from 'src/@core/components/custom-radio/types'

const CustomRadioIcons = (props: CustomRadioIconsProps) => {
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
        {data.map((item, index) => {
          const { value, title, icon, gridProps, content } = item

          return (
            <Grid item key={index} {...gridProps}>
              <Box
                onClick={() => setSelected(value)}
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
                  ...(selected === value
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
                <Radio
                  name={name}
                  size='small'
                  color={color}
                  value={value}
                  sx={{ mb: -2 }}
                  onChange={handleChange}
                  checked={selected === value}
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

export default CustomRadioIcons
