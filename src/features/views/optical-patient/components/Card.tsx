import dayjs from "dayjs";
import { useEffect } from "react";

type Props = {
  isActive: boolean;
  handleCardClick: () => void;
  data: any;
};

const Card = ({ isActive, handleCardClick, data }: Props) => {
  return (
    <>
      <div
        onClick={handleCardClick}
        className={`border rounded-md p-4 mt-4  ${isActive ? "bg-green-200 cursor-default" : "bg-yellow-100 cursor-pointer hover:bg-yellow-50 transition-all"}`}
      >
        <section className="border-b border-green-400">
          <h2 className="font-bold text-green-600">
            TR-{data.id.split("-")[0]}
          </h2>
        </section>
        <section>
          <p className="text-gray-500 pt-2 text-sm">
            <span className="font-bold text-yellow-800">
              Physician: {data.physicianDetails.lastName},{" "}
              {data.physicianDetails.firstName}
            </span>
          </p>
          <p className="text-gray-500 pb-2 text-[12px]">
            Date: {dayjs(data.created_at).format("LLL")}
          </p>
        </section>
      </div>
    </>
  );
};

export default Card;
