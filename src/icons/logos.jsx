export const Line = () => (
  <svg
    width="2"
    height="13"
    viewBox="0 0 2 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0.4865 0.568V12.556H1.3025V0.568H0.4865Z" fill="#111111" />
  </svg>
);

export const NikeLogo = (props) => {
  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={59}
      height={22}
      fill={fill}
      {...props}
    >
      <path
        fill={fill}
        fillRule="evenodd"
        d="M58.926.772 15.886 19.03c-3.584 1.52-6.599 2.279-9.028 2.279-2.733 0-4.724-.965-5.947-2.89-1.586-2.486-.893-6.48 1.827-10.699C4.354 5.255 6.407 2.993 8.408.828c-.47.765-4.627 7.68-.082 10.937.9.654 2.178.974 3.75.974 1.262 0 2.71-.206 4.303-.621L58.926.772Z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const SearchIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#111"
      strokeWidth={1.5}
      d="M13.962 16.296a6.716 6.716 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
    />
  </svg>
);

export const Heart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#111"
        strokeWidth={1.5}
        d="M16.794 3.75c1.324 0 2.568.516 3.504 1.451a4.96 4.96 0 0 1 0 7.008L12 20.508l-8.299-8.299a4.96 4.96 0 0 1 1.607-8.084 4.923 4.923 0 0 1 1.897-.375c1.324 0 2.568.516 3.504 1.451l.76.76.531.531.53-.531.76-.76a4.926 4.926 0 0 1 3.504-1.451Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const Cart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        stroke="#111"
        strokeWidth={1.5}
        d="M8.25 8.25V6a2.25 2.25 0 0 1 2.25-2.25h3a2.25 2.25 0 0 1 0 4.5H3.75v8.25a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V8.25H17.5"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowBack = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={49}
    height={48}
    fill="none"
    {...props}
  >
    <rect width={48} height={48} x={0.984} fill="#F5F5F5" rx={24} />
    <g clipPath="url(#a)">
      <path
        stroke="#CCC"
        strokeWidth={1.5}
        d="M28.51 30.966 21.541 24l6.967-6.967"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M12.984 12h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);

export const TwitterLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={31}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#7E7E7E"
        d="M15 .36c-2.734 0-5.25.666-7.55 2A14.741 14.741 0 0 0 2 7.81c-1.334 2.3-2 4.816-2 7.55 0 2.733.666 5.25 2 7.55a14.742 14.742 0 0 0 5.45 5.45c2.3 1.333 4.816 2 7.55 2s5.25-.667 7.55-2A14.742 14.742 0 0 0 28 22.91c1.334-2.3 2-4.817 2-7.55 0-2.734-.666-5.25-2-7.55a14.742 14.742 0 0 0-5.45-5.45c-2.3-1.334-4.816-2-7.55-2Zm7.5 11.6v.5c0 1.733-.416 3.4-1.25 5a10.232 10.232 0 0 1-3.55 3.9c-1.666 1.066-3.534 1.6-5.6 1.6a10.668 10.668 0 0 1-5.7-1.6h.9c1.734 0 3.266-.534 4.6-1.6-.8 0-1.516-.25-2.15-.75a4.053 4.053 0 0 1-1.35-1.95l.7.2c.466 0 .8-.067 1-.2a3.337 3.337 0 0 1-2.15-1.25 3.641 3.641 0 0 1-.85-2.35c.534.333 1.1.5 1.7.5-1.134-.667-1.7-1.7-1.7-3.1 0-.667.166-1.3.5-1.9 1 1.2 2.15 2.133 3.45 2.8 1.32.671 2.77 1.047 4.25 1.1-.134-.2-.2-.5-.2-.9 0-1 .366-1.867 1.1-2.6.734-.734 1.6-1.1 2.6-1.1s1.934.366 2.8 1.1c.6-.134 1.4-.434 2.4-.9-.266.933-.8 1.6-1.6 2h.1c.934-.2 1.6-.4 2-.6-.666.866-1.334 1.566-2 2.1Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .36h30v30H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const LocationLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M.313 4.985a4.687 4.687 0 0 1 9.374 0c0 .753-.24 1.61-.583 2.455-.347.853-.814 1.73-1.3 2.535a24.965 24.965 0 0 1-1.442 2.128c-.43.566-.823 1.02-1.07 1.217a.468.468 0 0 1-.585 0c-.246-.197-.639-.652-1.069-1.217a24.96 24.96 0 0 1-1.441-2.128c-.488-.805-.954-1.682-1.3-2.535C.553 6.595.312 5.738.312 4.985ZM5 7.016a2.031 2.031 0 1 0 0-4.063 2.031 2.031 0 0 0 0 4.063Z"
      clipRule="evenodd"
    />
  </svg>
);

export const FilterChange = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill="none"
    {...props}
  >
    <g stroke="#111" strokeWidth={1.5} clipPath="url(#a)">
      <path d="M21.531 8.25h-11m-5.25 0h-1.75M8.031 6a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3.531 15.75h10.75m5 0h2.25M17.031 13.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.531 0h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
);

export const Search = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke="#111"
      strokeWidth={1.5}
      d="M13.962 16.296a6.716 6.716 0 0 1-3.462.954 6.728 6.728 0 0 1-4.773-1.977A6.728 6.728 0 0 1 3.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0 1 10.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0 1 17.25 10.5a6.726 6.726 0 0 1-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"
    />
  </svg>
);

export const Play = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M1.011 2.628v7.925a.413.413 0 0 0 .62.358l7.417-4.283a.412.412 0 0 0 0-.715L1.631 1.63l-.825-.477"
    />
    <path
      stroke="#fff"
      strokeWidth={0.825}
      d="M1.011 2.628v7.925a.413.413 0 0 0 .62.358l7.417-4.283a.412.412 0 0 0 0-.715L1.631 1.63l-.825-.477"
    />
  </svg>
);

export const ThumbsUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="black"
      d="M4.025 12.375c.5-.8 1-1.625 1.5-2.475l.45-.6c.95-1.35 1.538-2.175 1.763-2.475.224-.3.587-.95 1.087-1.95l.3-.6c.05-.05.1-.25.15-.6.1-.85.25-1.475.45-1.875.25-.7.65-1.05 1.2-1.05.75 0 1.3.275 1.65.825.3.5.45 1.075.45 1.725 0 .55-.275 1.55-.825 3l-.3.825c-.1.35-.175.825-.225 1.425l-.15.75h2.625l.825.075c.6.05 1.125.15 1.575.3.65.15 1.1.375 1.35.675.3.4.475.825.525 1.275.05.3.05.7 0 1.2l-.9 7.5c-.15 1.25-.75 2.1-1.8 2.55-.6.25-1.375.375-2.325.375H.125V12.375h3.9Z"
    />
  </svg>
);

export const ThumbsDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#111"
      d="m5.525 14.025-1.5-2.4h-3.9V.75H13.4l.6.075c.45.05.9.15 1.35.3.55.2 1 .475 1.35.825.45.5.725 1.075.825 1.725l.9 7.425c.05.5.05.9 0 1.2-.05.5-.238.962-.563 1.387-.324.426-.887.688-1.687.788-.4.1-1.075.15-2.025.15h-2.625l.15.825c.05.6.125 1.05.225 1.35l.3.9c.55 1.45.825 2.45.825 3 0 .65-.15 1.225-.45 1.725-.35.55-.9.825-1.65.825-.55 0-.95-.35-1.2-1.05-.2-.4-.35-1.025-.45-1.875-.05-.4-.1-.625-.15-.675l-.3-.675c-.5-.95-.875-1.588-1.125-1.913-.25-.325-.875-1.187-1.875-2.587l-.3-.45Z"
    />
  </svg>
);

export const DeleteLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={22}
    fill="none"
    {...props}
  >
    <path
      stroke="#111"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M11.75 6.39v12m-4.5-12v12m-4.5-13.5v13.5c0 1.24 1.01 2.25 2.25 2.25h9c1.24 0 2.25-1.01 2.25-2.25V4.14m0 0H19m-2.75 0h2.25m-12-3h5.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5H.5"
    />
  </svg>
);

export const DeliverLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#111"
      stroke="#111"
      strokeLinejoin="round"
      strokeWidth={0.692}
      d="m23.454 8.92-2.647-7.507H4.192L1.607 8.736v11.692h21.847V8.92ZM4.869 2.336h15.262l2.153 6.092H2.715L4.87 2.336Zm17.6 17.23H2.53V9.351h20l-.061 10.215Z"
    />
    <path
      fill="#111"
      d="m16.19 12.058-.093-.099a.692.692 0 0 0-.988-.023l-3.96 3.849-1.258-1.224a.692.692 0 0 0-.989.023l-.092.1a.692.692 0 0 0 .023.969l1.834 1.783a.692.692 0 0 0 .965 0l4.535-4.409a.692.692 0 0 0 .023-.969Z"
    />
    <path
      fill="#D8D8D8"
      stroke="#000"
      strokeWidth={0.923}
      d="M12.962 2.49h-.923v5.538h.923V2.49Z"
    />
  </svg>
);

export const DeliverySMS = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={21}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <g clipPath="url(#b)">
        <path fill="#fff" d="M20 .797H0v20h20v-20Z" />
        <path
          stroke="#000"
          strokeWidth={1.625}
          d="M14.27 16.422h2.168a2.438 2.438 0 0 0 2.437-2.438v-9.75a2.438 2.438 0 0 0-2.438-2.437h-13A2.438 2.438 0 0 0 1 4.234v9.75a2.438 2.438 0 0 0 2.438 2.438h6.5a2.438 2.438 0 0 1 2.437 2.437v1.625M13.188 11.547H5.062M14.813 6.672h-9.75"
        />
      </g>
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .797h20v20H0z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M0 .797h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export const DeliveryLock = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#111"
      d="M2 7.39v8.5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.5H2Zm8-7a6.002 6.002 0 0 1 5.917 5H18a2 2 0 0 1 2 2v8.5a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-8.5a2 2 0 0 1 2-2h2.083A6.002 6.002 0 0 1 10 .39Zm0 2a4.002 4.002 0 0 0-3.874 3h7.748a4.002 4.002 0 0 0-3.874-3Z"
    />
  </svg>
);

export const ArrowDrop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M1.374 3.763a1 1 0 0 1 1.414.025l5.558 5.754-1.439 1.39L1.35 5.177a1 1 0 0 1 .024-1.414Z"
    />
    <path
      fill="#000"
      d="m5.654 9.542 5.558-5.755a1 1 0 0 1 1.438 1.39L7.093 10.93 5.654 9.542Z"
    />
  </svg>
);

export const PinLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={10}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M3.184.297C1.414.297-.008 1.74-.008 3.513c0 .642.22 1.239.525 1.74l2.67 4.044 2.67-4.044c.31-.501.525-1.101.525-1.743A3.206 3.206 0 0 0 3.184.297Z"
    />
  </svg>
);

export const LeftArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#CCC"
      strokeWidth={1.5}
      d="M8.509 14.966 1.542 8l6.967-6.967"
      {...props}
    />
  </svg>
);

export const RightArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={9}
    height={16}
    fill="none"
    {...props}
  >
    <path stroke="#111" strokeWidth={1.5} d="M.833 14.966 7.799 8 .833 1.033" {...props} />
  </svg>
);
