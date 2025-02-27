import React from 'react';
import styled from 'styled-components';
import style from './index.module.css'

const Loader = () => {
  return (
    <div className={` w-100 h-100 d-flex justify-content-center align-items-center position-absolute top-0 ${style.backDs} `}>
      <StyledWrapper>
        <div className="newtons-cradle">
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
          <div className="newtons-cradle__dot" />
        </div>
      </StyledWrapper>

    </div>

  );
}

const StyledWrapper = styled.div`
  .newtons-cradle {
   --uib-size: 50px;
   --uib-speed: 0.8s;
   --uib-color:rgb(255, 255, 255);
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   width: var(--uib-size);
   height: var(--uib-size);
   
  }

  .newtons-cradle__dot {
   position: relative;
   display: flex;
   align-items: center;
   height: 100%;
   width: 25%;
   transform-origin: center top;
  }

  .newtons-cradle__dot::after {
   content: '';
   display: block;
   width: 100%;
   height: 25%;
   border-radius: 50%;
   background-color: var(--uib-color);
  }

  .newtons-cradle__dot:first-child {
   animation: swing var(--uib-speed) linear infinite;
  }

  .newtons-cradle__dot:last-child {
   animation: swing2 var(--uib-speed) linear infinite;
  }

  @keyframes swing {
   0% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
   }

   25% {
    transform: rotate(70deg);
    animation-timing-function: ease-in;
   }

   50% {
    transform: rotate(0deg);
    animation-timing-function: linear;
   }
  }

  @keyframes swing2 {
   0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
   }

   50% {
    transform: rotate(0deg);
    animation-timing-function: ease-out;
   }

   75% {
    transform: rotate(-70deg);
    animation-timing-function: ease-in;
   }
  }`;

export default Loader;
