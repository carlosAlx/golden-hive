import { HeaderSection } from "../utils/HeaderSection";
import video_pic from "../../assets/video-pic.png";
import { MeetStyle } from "./styles";

export const MeetUs = () => {
  return (
    <section className="container" id="meet">
      <HeaderSection title={"Meet Us"} />
      <MeetStyle>
        <div className="row">
          <div>
            <h3>The Art of Beekeeping</h3>
            <h4>The Art of Beekeeping</h4>
            <p>
              We invite you to join us on a virtual tour of our honey farm to
              see firsthand how we produce our premium honey. Our video
              showcases the daily work of our beekeepers and the care they give
              to our bees. You'll see how we carefully harvest the honey,
              ensuring that our bees are not harmed and that our honey is of the
              highest quality.{" "}
            </p>
          </div>
          <img src={video_pic} alt="" />
        </div>
      </MeetStyle>
    </section>
  );
};
