import type { FC, SVGProps } from 'react';

const LoadingIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  const id = crypto.randomUUID();

  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40' fill='none' {...props}>
      <g clipPath='url(#id)'>
        <path
          d='M19.9999 0C8.95422 0 0 8.95422 0 19.9999C0 31.0455 8.95422 40.0001 19.9999 40.0001C31.0455 40.0001 40.0001 31.0455 40.0001 19.9999C39.9877 8.95935 31.0408 0.0124511 19.9999 0ZM19.9999 28.0001C22.3359 27.9884 24.5497 26.9528 26.0555 25.1671C26.4144 24.7467 27.0458 24.6969 27.4658 25.0558C27.8859 25.4143 27.9357 26.0457 27.5771 26.4657C24.8646 29.666 20.4434 30.8328 16.5051 29.3884C12.5669 27.9437 9.94849 24.1948 9.94849 19.9999C9.94849 15.8049 12.5669 12.056 16.5051 10.6117C20.4434 9.16699 24.8646 10.3341 27.5771 13.5341C27.9357 13.9545 27.8859 14.5858 27.4658 14.9443C27.0458 15.3029 26.4144 15.2531 26.0555 14.833C23.6576 12.0238 19.6458 11.2262 16.3553 12.9049C13.0653 14.5833 11.3562 18.2996 12.223 21.8903C13.0898 25.4806 16.3063 28.0074 19.9999 28.0001Z'
          fill='white'
        ></path>
      </g>
      <defs>
        <clipPath id={id}>
          <rect width='40' height='40' fill='white'></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default LoadingIcon;
