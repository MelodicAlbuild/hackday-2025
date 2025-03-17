"use client";

import scheduleData from "../../schedule.json";

export default function Schedule() {
  return (
    <div className="grid grid-cols-3 gap-4 w-[40%]">
      {scheduleData.map((day, index) => (
        <>
          {day.inline != null && day.inline ? (
            <>
              <div
                className="text-white text-2xl border rounded-lg p-2"
                key={index}
              >
                <h1 className="text-3xl underline">{day["label"]}</h1>
                <h2>Starts At: {day["time-start"]}</h2>
                {day["time-end"] != "" ? (
                  <p>Ends At: {day["time-end"]}</p>
                ) : (
                  <></>
                )}
              </div>
            </>
          ) : (
            <>
              <div
                className="text-white text-2xl border rounded-lg p-2 col-span-3"
                key={index}
              >
                <h1 className="text-3xl underline">{day["label"]}</h1>
                <h2>Starts At: {day["time-start"]}</h2>
                {day["time-end"] != "" ? (
                  <p>Ends At: {day["time-end"]}</p>
                ) : (
                  <></>
                )}

                {day["children"] != undefined ? (
                  <div className="flex justify-center mt-4">
                    <div className="grid grid-cols-1 gap-4 w-[70%]">
                      {day["children"].map((event, index) => (
                        <div
                          className="text-white text-2xl border rounded-lg p-2"
                          key={index}
                        >
                          <h3>
                            {event["label"]}: {event["time-start"]}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </>
          )}
        </>
      ))}
    </div>
  );
}
