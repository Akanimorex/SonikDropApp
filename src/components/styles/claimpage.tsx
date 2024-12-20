import styled from "styled-components";

export const ClaimPageStyle = styled.div`
  .banner {
    border-radius: 1.25rem;
    background: linear-gradient(180deg, #0b135b 40.24%, rgba(1, 3, 20, 0) 100%),
      radial-gradient(
        65.08% 85.05% at 50% 50%,
        rgba(0, 0, 0, 0) 37.41%,
        #2b75ff 75%,
        #26c6fd 100%
      );
    min-height: 12.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.75rem;
    h1 {
      color: #fff;
      font-style: normal;
      text-align: center;
      font-size: 2.5rem;
      font-weight: 500;
      line-height: 3.0625rem; /* 122.5% */
    }
    p {
      color: #babcd2;
      text-align: center;
      font-style: normal;
      font-weight: 400;
      line-height: 1.395rem; /* 148.8% */
      font-size: 0.9375rem;
    }
  }
  .filters {
    display: flex;
    gap: 1rem;
    .tabs {
      display: flex;
      border-radius: 0.5rem;
      background: var(--Fill-Color-Light-Tertiary, rgba(118, 118, 128, 0.12));
      height: 2.5rem;
      padding: 0.125rem;
      button {
        display: flex;
        padding: 0.625rem 0.46875rem 0.625rem 0.5rem;
        width: 6.375rem;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
        border-radius: 0.4375rem;
        align-self: stretch;
        background: transparent;
        position: relative;
      }
    }
    .button p {
      text-align: center;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem; /* 153.846% */
      letter-spacing: -0.005rem;
    }
    justify-content: space-between;
    align-items: center;
  }
  .inp {
    width: 40%;
    input {
      width: 100%;
      height: 3.5rem;
      padding: 1rem;
      padding-right: 1.8rem;
      padding-left: 1.8rem;
      border-radius: 1.875rem;
      border: 1px solid rgba(152, 162, 179, 0.3);
      background: #050c19;
    }
    input::placeholder {
      color: var(--Grey-400, #98a2b3);
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem; /* 142.857% */
    }
  }
  @media (max-width: 600px) {
    .banner {
      padding-right: 1rem;
      padding-left: 1rem;
      h1 {
        font-size: 1.35rem;
      }
      gap: 0.5rem;
      p {
        font-size: 0.8125rem;
        line-height: 1rem;
      }
    }
    .filters {
      flex-direction: column-reverse;
      align-items: flex-start;
    }
    .inp {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;

export const DropCompStyle = styled.div`
  border-radius: 0.5rem;
  border: 2px solid rgba(152, 162, 179, 0.3);
  display: flex;
  padding: 1.25rem 1rem 0.875rem 1rem;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  .top {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-self: stretch;
  }

  .btn {
    width: 100%;
    button {
      border-radius: 1.25rem;
      background: rgba(255, 255, 255, 0.1);
      height: 2.5rem;
      padding: 0.625rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #f5f5f5;
      text-align: center;
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 500;
      line-height: 2rem; /* 228.571% */
      letter-spacing: -0.02rem;
    }
  }
  .one .deet {
    h4 {
      color: var(--Grey-50, #f9fafb);
      font-variant-numeric: lining-nums proportional-nums;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem; /* 184.615% */
    }
    p {
      color: var(--Grey-300, #d0d5dd);
      font-variant-numeric: lining-nums proportional-nums;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5rem; /* 240% */
    }
  }
  .two {
    h3 {
      color: var(--Grey-50, #f9fafb);
      font-variant-numeric: lining-nums proportional-nums;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.5rem; /* 150% */
    }
    p {
      color: var(--Grey-300, #d0d5dd);
      font-variant-numeric: lining-nums proportional-nums;
      font-size: 0.8125rem;
      font-style: normal;
      font-weight: 500;
      line-height: 1.5rem; /* 240% */
    }
  }
  .blu p {
    font-variant-numeric: lining-nums proportional-nums;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.5rem; /* 240% */
    background: var(--okay, linear-gradient(180deg, #26c6fd 0%, #097aec 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
    .three .inner{
    background: var(--coughs, linear-gradient(164deg, #2C67FF -21.47%, #27C4FD 88.84%));
    }
`;

export const DropListStyle = styled.div`
  //   border: 2px solid red;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(164px, 100%), 1fr));
    column-gap: 1.69rem;
    row-gap: 2rem;
  }

  @media (min-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(min(230px, 100%), 1fr));
    column-gap: 1.69rem;
    row-gap: 2rem;
  }

  @media (min-width: 998px) {
    grid-template-columns: repeat(auto-fill, minmax(min(340px, 100%), 1fr));
    column-gap: 1.69rem;
    row-gap: 2rem;
  }
`;
