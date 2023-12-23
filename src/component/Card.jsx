import React from "react";

function Card(props) {
  return (
    <>
      <div className="w-full p-4 rounded-[0.5rem] border border-solid border-[#ccc] shadow-md bg-[#ffffff] mb-2 cursor-pointer">
        <div className="flex items-start justify-between">
          <div className="text-[#808184] text-[0.95rem] font-[500]">
            {props.cardDetails.id}
          </div>
          <div className="h-[26px] w-[26px] flex items-center justify-center text-[#ffffff] bg-[#b06e0c] rounded-[50%] text-[0.6rem] relative">
            <div className="uppercase">
              {props.cardDetails.userObj.name
                .split(" ")
                .map((word) => word[0])
                .join("")}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "profile-initial profile-initial-true"
                  : "profile-initial"
              }
            ></div>
          </div>
        </div>
        <div className="flex items-center mt-[0.8rem]">
          {props.statusshow &&
            {
              Backlog: (
                <div className="mr-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8.56 3.69a9 9 0 0 0-2.92 1.95M3.69 8.56A9 9 0 0 0 3 12m.69 3.44a9 9 0 0 0 1.95 2.92m2.92 1.95A9 9 0 0 0 12 21m3.44-.69a9 9 0 0 0 2.92-1.95m1.95-2.92A9 9 0 0 0 21 12m-.69-3.44a9 9 0 0 0-1.95-2.92m-2.92-1.95A9 9 0 0 0 12 3"
                    />
                  </svg>
                </div>
              ),
              Todo: (
                <div className="mr-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="grey"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                    </g>
                  </svg>
                </div>
              ),
              "In progress": (
                <div className="mr-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                  >
                    <g transform="translate(24 0) scale(-1 1)">
                      <path
                        fill="#fdc000"
                        d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8V4Z"
                      />
                    </g>
                  </svg>
                </div>
              ),
              Done: (
                <div className="mr-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="blue"
                      d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1c117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm-16.79 192.47l51.55-59a16 16 0 0 1 24.1 21.06l-51.55 59a16 16 0 1 1-24.1-21.06Zm-38.86 90.85a16 16 0 0 1-22.62 0l-47.95-48a16 16 0 1 1 22.64-22.62l48 48a16 16 0 0 1-.07 22.62Zm176.8-128.79l-111.88 128a16 16 0 0 1-11.51 5.47h-.54a16 16 0 0 1-11.32-4.69l-47.94-48a16 16 0 1 1 22.64-22.62l29.8 29.83a8 8 0 0 0 11.68-.39l95-108.66a16 16 0 0 1 24.1 21.06Z"
                    />
                  </svg>
                </div>
              ),
              Cancelled: (
                <div className="mr-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="red"
                      d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59L15.59 7L17 8.41L13.41 12L17 15.59z"
                    />
                  </svg>
                </div>
              ),
            }[props.cardDetails.status]}

          <div className="text-1rem font-[500] text-[#000000]">
            {props.cardDetails.title}
          </div>
        </div>

        <div className="flex items-center mt-[0.8rem]">
          {
            {
              0: (
                <div className="border border-[#dfe4e9] rounded-[0.3rem] h-[25px] w-[fit-content] flex items-center mr-2">
                  <svg
                    className="text-[#808184] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"
                    />
                  </svg>
                </div>
              ),
              1: (
                <div className="border border-[#dfe4e9] rounded-[0.3rem] h-[25px] w-[fit-content] flex items-center mr-2">
                  <svg
                    className="text-[#808184] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor">
                      <path
                        fill-rule="evenodd"
                        d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z"
                        clip-rule="evenodd"
                      />
                      <path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
                    </g>
                  </svg>
                </div>
              ),
              2: (
                <div className="border border-[#dfe4e9] rounded-[0.3rem] h-[25px] w-[fit-content] flex items-center mr-2">
                  <svg
                    className="text-[#808184] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <g fill="currentColor">
                      <path d="M19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
                      <path
                        fill-rule="evenodd"
                        d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9Zm3-1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4Z"
                        clip-rule="evenodd"
                      />
                    </g>
                  </svg>
                </div>
              ),
              3: (
                <div className="border border-[#dfe4e9] rounded-[0.3rem] h-[25px] w-[fit-content] flex items-center mr-2">
                  <svg
                    className="text-[#808184] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="currentColor"
                      d="M32 9a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21ZM9 30a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H9Z"
                    />
                  </svg>
                </div>
              ),
              4: (
                <div className="border border-[#dfe4e9] rounded-[0.3rem] h-[25px] w-[fit-content] flex items-center mr-2">
                  <svg
                    className="text-[#808184] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="red"
                      d="M5.96 4.457a2.075 2.075 0 1 1 4.08 0l-.856 4.56a1.205 1.205 0 0 1-2.368 0l-.855-4.56ZM9.5 12.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                </div>
              ),
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag) => {
            return (
              <div className="border border-[#dfe4e9] p-[0.3rem] rounded-[0.3rem] w-[fit-content]">
                <div className="tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
