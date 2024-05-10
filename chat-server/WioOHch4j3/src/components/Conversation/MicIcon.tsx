import { memo, SVGProps } from 'react';

const MicIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M12 1C11.2044 1 10.4413 1.31607 9.87868 1.87868C9.31607 2.44129 9 3.20435 9 4V12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12V4C15 3.20435 14.6839 2.44129 14.1213 1.87868C13.5587 1.31607 12.7956 1 12 1Z'
      stroke='#828282'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 10V12C19 13.8565 18.2625 15.637 16.9497 16.9497C15.637 18.2625 13.8565 19 12 19C10.1435 19 8.36301 18.2625 7.05025 16.9497C5.7375 15.637 5 13.8565 5 12V10'
      stroke='#828282'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12 19V23' stroke='#828282' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M8 23H16' stroke='#828282' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(MicIcon);
export { Memo as MicIcon };