import React from "react";

const UserPlus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M19 8v6M22 11h-6" />
  </svg>
);

export default UserPlus;
