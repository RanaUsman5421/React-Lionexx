import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-container">
        <span className="text">
          <svg viewBox="0 0 24 24" height={22} width={22} xmlns="http://www.w3.org/2000/svg">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8A2.5 2.5 0 0 1 17.5 16h-6.086L7 19.914V16H6.5A2.5 2.5 0 0 1 4 13.5v-8Z" />
          </svg>
        </span>
        <a
          className="tooltip1"
          href="https://www.instagram.com/lionex.courier?igsh=ZGEwdmRvaW04eDM2"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.75A3 3 0 0 0 4.75 7.75v8.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-8.5a3 3 0 0 0-3-3h-8.5Zm8.875 1.375a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.75A3.25 3.25 0 1 0 12 15.25 3.25 3.25 0 0 0 12 8.75Z" />
          </svg>
        </a>
        <a
          className="tooltip2"
          href="https://www.facebook.com/share/1As4M3nSQv/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          <svg viewBox="0 0 16 16" className="bi bi-facebook" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
        </a>
        <a
          className="tooltip3"
          href="https://wa.me/923054447156"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 16 16" className="bi bi-whatsapp" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
        <a
          className="tooltip4"
          href="https://www.tiktok.com/@lionex.courier?_r=1&_t=ZS-94qf3RUID2d"
          target="_blank"
          rel="noreferrer"
          aria-label="TikTok"
        >
          <svg viewBox="0 0 24 24" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 3c.27 1.47 1.12 2.84 2.33 3.7 1 .72 2.16 1.1 3.4 1.11v2.78a8.57 8.57 0 0 1-3-.53V15.8a5.8 5.8 0 1 1-5.8-5.8c.24 0 .47.02.7.05v2.86a2.96 2.96 0 0 0-.7-.09 2.99 2.99 0 1 0 2.99 2.99V3h3.08Z" />
          </svg>
        </a>
        <span className="tooltip9"> </span>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* This is an example, feel free to delete this code */
  .tooltip-container {
    background: rgb(247, 129, 52);
    background: linear-gradient(
      138deg,
      rgba(247, 129, 52, 1) 15%,
      rgba(224, 106, 42, 1) 65%
    );
    position: relative;
    cursor: pointer;
    font-size: 17px;
    padding: 0.7em 0.7em;
    border-radius: 50px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
  }
  .tooltip-container:hover {
    background: #fff;
    transition: all 0.6s;
  }
  .tooltip-container .text {
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #fff;
    transition: all 0.2s;
  }
  .tooltip-container a {
    text-decoration: none;
    line-height: 0;
  }
  .tooltip-container:hover .text {
    fill: #f78134;
    transition: all 0.6s;
  }

  /* Inicio do tooltip instagram */
  .tooltip1 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #e4405f;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip1 {
    top: 150%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    border-radius: 50px;
    transform: translate(-50%, -5px);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip1:hover {
    background: #e4405f;
    fill: #fff;
  }
  /* Fim do tooltip instagram */

  /* Inicio do tooltip facebook */
  .tooltip2 {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #0462df;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip2 {
    top: -120%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(-50%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tooltip-container:hover .tooltip2:hover {
    background: #0462df;
    fill: #fff;
  }
  /* Fim do tooltip facebook */

  /* Inicio do tooltip whatsApp */
  .tooltip3 {
    position: absolute;
    top: 100%;
    left: 60%;
    transform: translateX(80%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #1db954;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip3 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(85%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip3:hover {
    background: #1db954;
    fill: #fff;
  }
  /* Fim do tooltip whatsApp */

  /* Inicio do tooltip TikTok */
  .tooltip4 {
    position: absolute;
    top: 100%;
    left: -190%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #111111;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip4 {
    top: 10%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip4:hover {
    background: #111111;
    fill: #fff;
  }
  /* Fim do tooltip TikTok */

  /* Inicio do tooltip pinterest */
  .tooltip5 {
    position: absolute;
    top: 100%;
    left: -145%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #bd081c;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip5 {
    top: -78%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip5:hover {
    background: #bd081c;
    fill: #fff;
  }
  /* Fim do tooltip pinterest */

  /* Inicio do tooltip dribbble */
  .tooltip6 {
    position: absolute;
    top: 100%;
    left: 35%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #ea4c89;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip6 {
    top: -79%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip6:hover {
    background: #ea4c89;
    fill: #fff;
  }
  /* Fim do tooltip dribbble */

  /* Inicio do tooltip github */
  .tooltip7 {
    position: absolute;
    top: 100%;
    left: 39%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #000;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip7 {
    top: 104%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip7:hover {
    background: #000;
    fill: #fff;
  }
  /* Fim do tooltip github */

  /* Inicio do tooltip reddit */
  .tooltip8 {
    position: absolute;
    top: 100%;
    left: -150%;
    transform: translateX(70%);
    opacity: 0;
    visibility: hidden;
    background: #fff;
    fill: #ff4500;
    padding: 10px;
    border-radius: 50px;
    transition:
      opacity 0.3s,
      visibility 0.3s,
      top 0.3s,
      background 0.3s;
    z-index: 1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  .tooltip-container:hover .tooltip8 {
    top: 101%;
    opacity: 1;
    visibility: visible;
    background: #fff;
    transform: translate(70%, -5px);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tooltip-container:hover .tooltip8:hover {
    background: #ff4500;
    fill: #fff;
  }
  /* Fim do tooltip reddit */

  /* Inicio do tooltip fixo */
  .tooltip9 {
    position: absolute;
    top: 0;
    left: -115%;
    opacity: 0;
    visibility: hidden;
    width: 150px;
    height: 150px;
    z-index: -1;
  }

  .tooltip-container:hover .tooltip9 {
    top: -110%;
    opacity: 1;
    visibility: visible;
    border-radius: 50%;
    z-index: -1;
  }
  /* Fim do tooltip fixo */
  /* Por meio desse ultimo tooltip todos os outros podem
  ficar fixos quando houver no principal, para vê-lo dê um
  background black acima*/`;

export default Tooltip;
