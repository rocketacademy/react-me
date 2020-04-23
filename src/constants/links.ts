import { Contact } from '../types'
import { LinkedInIcon, GithubIcon, EmailIcon, SourceIcon } from '../assets'

const linkedInUrl = '#'
const githubUrl = '#'
const emailAddress = '#'
const sourceCodeUrl = '#'

const links: Contact[] = [
  {
    name: 'My LinkedIn',
    link: linkedInUrl,
    icon: LinkedInIcon,
  },
  {
    name: 'My Github',
    link: githubUrl,
    icon: GithubIcon,
  },
  {
    name: 'Email me',
    link: emailAddress,
    icon: EmailIcon,
  },
  {
    name: 'Source code',
    link: sourceCodeUrl,
    icon: SourceIcon,
  },
]

export { links, linkedInUrl, githubUrl, emailAddress, sourceCodeUrl }
