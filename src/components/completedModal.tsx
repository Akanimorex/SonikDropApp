import { useNavigate } from "react-router-dom";
import { parentVariant } from "../animations/animation";
import { NavModalStyles } from "./styles/approve";
import { FlexAbsoluteModalStyles } from "./styles/claimpage";

export const CompletedModal = () => {
  const navigate = useNavigate();
  return (
    <FlexAbsoluteModalStyles
      variants={parentVariant}
      initial="initial"
      animate="final"
    >
      <NavModalStyles className="flex flex-col justify-between gap-[3.38rem] overflow-y-auto max-h-[95vh]">
        <div className="flex flex-col gap-[1.44rem]">
          <div className="img w-full flex justify-center items-center">
            <div className="w-[20.125rem] h-[15.0625rem]">
              <img
                src="/track.svg"
                alt="airdrop-approve"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="text flex flex-col gap-[0.75rem]">
            <h1 className="w-full">
              Welcome to real-time monitoring
            </h1>
            <p>
              Effortless claiming ready in seconds, SonikDrop keeps it fast
              simple and secure across chains, empowering creators and users
              with smooth drops every time
            </p>
          </div>
        </div>

        <div className="btn w-full">
          <button type="button" className="w-full" onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
        </div>
      </NavModalStyles>
    </FlexAbsoluteModalStyles>
  );
};