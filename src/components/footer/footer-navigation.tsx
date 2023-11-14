import React, { FC } from 'react'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import type { Navigation } from '@/interfaces/navigation'
// import { navigations as headerNavigations } from '@/components/navigation/navigation.data'
import { FooterSectionTitle } from '@/components/footer'

const companyMenu: Array<Navigation> = [
  { label: 'Privacy & Policy', path: '#' },
  { label: 'Term & Condition', path: '#' },
  { label: 'FAQ', path: '#' },
]

interface NavigationItemProps {
  label: string
  path: string
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <Link href={path} passHref>
      <MuiLink
        underline="hover"
        sx={{
          display: 'block',
          mb: 1,
          color: 'primary.contrastText',
        }}
      >
        {label}
      </MuiLink>
    </Link>
  )
}

const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Contact Us" />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
            color: 'white',
          }}
        >
          <a
            style={{
              color: 'white',
              paddingBottom: '4px',
              fontWeight: 60,
            }}
            href="tel:+2348139033373"
          >
            +2348139033373
          </a>
          <a
            style={{
              color: 'white',
              paddingBottom: '4px',
              fontWeight: 60,
            }}
            href="tel:+2349055928430"
          >
            +2349055928430
          </a>
          <a
            style={{
              color: 'white',
              paddingBottom: '4px',
              fontWeight: 60,
            }}
            href="mailto:felojefprotech@gmail.com"
          >
            Email Us
          </a>
        </div>
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="About" />
        {companyMenu.map(({ label, path }, index) => (
          <NavigationItem key={index + path} label={label} path={path} />
        ))}
      </Grid>
    </Grid>
  )
}

export default FooterNavigation
