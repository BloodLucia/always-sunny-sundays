import { SVGProps, memo } from 'react'

export const IconMenu = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="icon"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#8a8a8a"
      d="M992 832H32c-17.067 0-32-14.933-32-32s14.933-32 32-32h960c17.067 0 32 14.933 32 32s-14.933 32-32 32zm0-288H32c-17.067 0-32-14.933-32-32s14.933-32 32-32h960c17.067 0 32 14.933 32 32s-14.933 32-32 32zm0-288H32c-17.067 0-32-14.933-32-32s14.933-32 32-32h960c17.067 0 32 14.933 32 32s-14.933 32-32 32z"
    />
  </svg>
))
