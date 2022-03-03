// ** MUI Imports
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icons Imports
import CircleOutline from 'mdi-material-ui/CircleOutline'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Types
import { CustomChipProps } from 'src/@core/components/mui/chip/types'
import { PricingPlanProps } from './types'

// ** Styled Component for the wrapper of whole component
const BoxWrapper = styled(Box)<BoxProps>(({ theme }) => ({
  position: 'relative',
  padding: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

// ** Styled Component for the wrapper of all the features of a plan
const BoxFeature = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: theme.spacing(5.75),
  '& > :not(:first-of-type)': {
    marginTop: theme.spacing(3.5)
  }
}))

// ** Styled Chip Component
const Chip = styled(CustomChip)<CustomChipProps>(({ theme }) => ({
  top: 11,
  right: 12,
  height: 20,
  position: 'absolute',
  '& .MuiChip-label': {
    fontWeight: 600,
    fontSize: '0.75rem',
    paddingLeft: theme.spacing(1.75),
    paddingRight: theme.spacing(1.75)
  }
}))

const PlanDetails = (props: PricingPlanProps) => {
  // ** Props
  const { plan, data } = props

  const renderFeatures = () => {
    return data?.planBenefits.map((item: string, index: number) => (
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <CircleOutline sx={{ fontSize: '0.75rem', marginRight: 2, color: 'text.secondary' }} />
        <Typography variant='body2'>{item}</Typography>
      </Box>
    ))
  }

  return (
    <BoxWrapper
      sx={{
        border: theme =>
          !data?.popularPlan
            ? `1px solid ${theme.palette.divider}`
            : `1px solid ${hexToRGBA(theme.palette.primary.main, 0.5)}`
      }}
    >
      {data?.popularPlan ? <Chip label='Popular' skin='light' color='primary' /> : null}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <img
          width={data?.imgWidth}
          src={`${data?.imgSrc}`}
          height={data?.imgHeight}
          alt={`${data?.title.toLowerCase()}-plan-img`}
        />
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant='h5'>{data?.title}</Typography>
        <Typography variant='body2'>{data?.subtitle}</Typography>
        <Box sx={{ mt: 4.4, mb: 9.2, position: 'relative' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='body2' sx={{ mt: 1.6, alignSelf: 'flex-start' }}>
              $
            </Typography>
            <Typography
              variant='h3'
              sx={{ fontWeight: 600, alignSelf: 'center', color: 'primary.main', lineHeight: 1.17 }}
            >
              {plan === 'monthly' ? data?.monthlyPrice : data?.yearlyPlan.perMonth}
            </Typography>
            <Typography variant='body2' sx={{ mb: 1.6, alignSelf: 'flex-end' }}>
              /month
            </Typography>
          </Box>
          {plan !== 'monthly' && data?.monthlyPrice !== 0 ? (
            <Typography
              variant='body2'
              sx={{ left: 0, right: 0, position: 'absolute' }}
            >{`USD ${data?.yearlyPlan.totalAnnual}/year`}</Typography>
          ) : null}
        </Box>
      </Box>
      <BoxFeature>{renderFeatures()}</BoxFeature>
      <Button
        fullWidth
        color={data?.currentPlan ? 'success' : 'primary'}
        variant={data?.popularPlan ? 'contained' : 'outlined'}
      >
        {data?.currentPlan ? 'Your Current Plan' : 'Upgrade'}
      </Button>
    </BoxWrapper>
  )
}

export default PlanDetails
