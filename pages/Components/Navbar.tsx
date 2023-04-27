import React, { useEffect, useState } from "react";
import { AnimatedLogo } from "./Assets";

const Navbar = ({ show }: { show: boolean }) => {
  return (
    <div
      className="navbar-sticky"
      style={{
        opacity: show ? "0" : "1",
        translate: show ? "0px -50px" : "0px 0px",
      }}
    >
      <div className="wrapper-navbar">
        <div className="navbar-inner">
          <div className="navbar-left">
            <svg
              width={42}
              height={42}
              viewBox="0 0 42 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.3906 21.1163L33.3868 21.1721V21.2281C33.3868 22.933 33.0412 24.0084 32.5706 24.7153C32.1102 25.4069 31.4212 25.9098 30.4094 26.2711C29.3694 26.6425 28.0533 26.84 26.4475 26.9336C25.037 27.0158 23.4994 27.0144 21.8238 27.0129C21.5949 27.0127 21.3634 27.0125 21.1293 27.0125C20.8952 27.0125 20.6637 27.0127 20.4348 27.0129C18.7592 27.0144 17.2216 27.0158 15.811 26.9336C14.2053 26.84 12.8892 26.6425 11.8492 26.2711C10.8374 25.9098 10.1484 25.4069 9.68797 24.7153C9.21738 24.0084 8.87181 22.933 8.87181 21.2281C8.87181 14.4372 14.3808 8.83287 21.1293 8.83287C28.0251 8.83287 33.8658 14.1069 33.3906 21.1163Z"
                stroke="#444444"
                strokeWidth={3.30539}
              />
              <path
                d="M6.27249 10.4891C-2.58552 23.5537 6.01924 33.1719 12.9999 32.7742C13.1625 32.765 13.3024 32.8919 13.3024 33.0548V39.1467C13.3024 39.3941 13.6033 39.516 13.7756 39.3385L19.9871 32.9386C20.1026 32.8197 20.2668 32.7593 20.432 32.773C29.0521 33.4878 35.8388 31.9111 38.3493 26.9771C41.496 20.7931 38.487 13.2047 35.4571 9.89927C29.1217 1.08489 13.3024 0.120799 6.27249 10.4891Z"
                stroke="url(#paint0_linear_2495_9109)"
                strokeWidth={3.85629}
              />
              <circle cx={16.0588} cy={19.0238} r={1.72941} fill="#FB5F66" />
              <circle cx={21.247} cy={19.0238} r={1.72941} fill="#FB5F66" />
              <circle cx={26.4352} cy={19.0238} r={1.72941} fill="#FB5F66" />
              <defs>
                <linearGradient
                  id="paint0_linear_2495_9109"
                  x1={8.18766}
                  y1={3.8394}
                  x2={20.6809}
                  y2={39.8259}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF898E" />
                  <stop offset={0.546875} stopColor="#EA0D17" />
                  <stop offset={1} stopColor="#FB5F66" />
                </linearGradient>
              </defs>
            </svg>
            <div className="logo-txt">
              <h3>Chatbot Builder</h3>
            </div>
          </div>
          <div className="navbar-right">
            <a href="https://app.chatbotbuilder.net/login">
              <button className="login-btn">Login</button>
            </a>
            <a href="https://app.chatbotbuilder.net/register">
              {" "}
              <button className="signup-btn">Sign Up</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
