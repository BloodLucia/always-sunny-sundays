import { SVGProps, memo } from "react"

export const IconBandcamp = memo((props: SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="2.5em"
  height="2.5em"
  className="icon"
  viewBox="0 0 1024 1024"
  {...props}
>
  <path
    fill="#629AA9"
    d="M512 0C229.171 0 0 229.171 0 512s229.171 512 512 512 512-229.171 512-512S794.829 0 512 0zm99.499 673.246H237.84l174.865-322.287h373.658L611.499 673.246z"
  />
</svg>
))