import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const About: FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Container>
        <Box
          sx={{
            borderRadius: 10,
            py: { xs: 4, md: 10 },
            px: { xs: 2, md: 8 },
          }}
        >
          <Typography
            component="mark"
            sx={{
              position: 'relative',
              color: 'primary.main',
              backgroundColor: 'unset',
              fontSize: { xs: 40, md: 72 },
            }}
          >
            About Us{' '}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 24, md: 34 },
                left: 2,
                transform: 'rotate(3deg)',
                '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
              }}
            >
              {/* eslint-disable-next-line */}
              <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
          </Typography>
          <br />
          <br />
          <Typography sx={{ lineHeight: 1.6, fontSize: { xs: 16, md: 20 } }}>
            {
              'Felojef Pro Tech LTD is dully incorporated with the Nigeria cooperate affair commission on 21St. Sept. 2016. With the mandate to become FOOD AND AGRO ALLIED COMPANY Also AN ENTREPRENEUR AND SERVICE PROVIDER.'
            }
          </Typography>
          <br />
          <Typography sx={{ lineHeight: 1.6, fontSize: { xs: 16, md: 20 } }}>
            {
              'Felojef Pro Tech Exist to turn the Nations agricultural resource into real wealth and sustainable means of economic emancipation. While using modern technology to create a huge job for 30 million people along the agro value chain. To eradicate wide spread of poverty among small holder farmers in the rural communities. We understand fact of women accounting for a major part of our population in most Africa countries. Majority of the women are dependent, lives in rural areas. With the economic continuous depletion, more women and youth are also unemployed. '
            }
          </Typography>
          <br />
          <Typography sx={{ lineHeight: 1.6, fontSize: { xs: 16, md: 20 } }}>
            {
              'This categories of people contribute to the heavyweight o dependency on the few employed men. Therefore the urgent employment of women and youth with be a prime mover for our economy. Felojef Pro Tech keen interest finds s to locate them at the rural level; profile them , train , educate , improve their production capacity ,   empower for earning ability.. This initiative,  is building a network of farmers to address Food Insecurity in Africa through the combine efforts of rural farmers, industry key players, government, institution and best available technology. '
            }
          </Typography>
          <br />
          <Typography sx={{ lineHeight: 1.6, fontSize: { xs: 16, md: 20 } }}>
            {
              ' We desire to synergize with reputable organization for Nation Building, Government, Ministries, Financial institution , Principal heads of Institution, commerce,  NGOs, International Organization, Legislature and other relevant Organization for a sustainable development to mitigate the present global challenges and the future.'
            }
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default About
