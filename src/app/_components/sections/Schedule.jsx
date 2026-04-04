"use client";

import Data from "@data/sections/schedule.json";
import Link from "next/link";

const ScheduleSection = () => {
    return (
        <>
            {/* schedule */}
            <div className="tst-banner-sm">

              <div className="tst-cover-frame">
                <img src={Data.image.url} alt={Data.image.alt} className="tst-cover" />
                <div className="tst-overlay"></div>
              </div>

              <div className="row align-items-center">

                <div className="col-lg-8">

                  <div className="tst-text-frame">
                    <div className="tst-suptitle tst-suptitle-mobile-center tst-white-2 tst-mb-15">{Data.subtitle}</div>
                    <h2 className="tst-white-2 tst-mb-30" dangerouslySetInnerHTML={{__html : Data.title}} />
                    <p className="tst-text tst-white-2 tst-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />

                    <div className="tst-btn-mobile">
                      <Link href={Data.button1.link} className="tst-btn tst-res-btn tst-mr-30">{Data.button1.label}</Link>
                      <Link href={Data.button2.link} className="tst-label tst-white-2">{Data.button2.label}</Link>
                    </div>
                  </div>

                </div>
                <div className="col-lg-4">

                  <div className="tst-wh-frame">
                      {Data.items.map((item, key) => (
                          <div className={key == 0 ? "tst-mb-30" : ""} key={`schedule-item-${key}`}>
                              <div className="tst-label tst-mb-15">{item.label}</div>
                              {item.slots.map((slot, i) => (
                                  <div key={i} className={i > 0 ? "tst-mt-15" : ""}>
                                      <div className="h5">
                                          {slot.from.hours} <span className="tst-color">:</span> {slot.from.minutes}
                                          <span className="tst-color"> — </span>
                                          {slot.to.hours} <span className="tst-color">:</span> {slot.to.minutes}
                                      </div>
                                  </div>
                              ))}
                          </div>
                      ))}
                  </div>

                </div>
              </div>

            </div>
            {/* schedule end */}
        </>
    );
}
export default ScheduleSection;