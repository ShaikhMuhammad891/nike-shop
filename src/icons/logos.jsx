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

export const NikeLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={59}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#111"
      fillRule="evenodd"
      d="M58.926.772 15.886 19.03c-3.584 1.52-6.599 2.279-9.028 2.279-2.733 0-4.724-.965-5.947-2.89-1.586-2.486-.893-6.48 1.827-10.699C4.354 5.255 6.407 2.993 8.408.828c-.47.765-4.627 7.68-.082 10.937.9.654 2.178.974 3.75.974 1.262 0 2.71-.206 4.303-.621L58.926.772Z"
      clipRule="evenodd"
    />
  </svg>
);

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
