import { IoMdCloudUpload } from "react-icons/io";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { IoChatboxEllipsesOutline } from "react-icons/io5";

const processCardData = [
  {
    icon: IoMdCloudUpload,
    title: "Upload",
    description:
      "Drop your meeting, lecture, interview, or recorded call.",
  },
  {
    icon: TbMessageChatbotFilled,
    title: "AI Processing",
    description:
      "ReCapAI transcribes the video, understands the content, and creates a searchable knowledge base.",
  },
  {
    icon: IoChatboxEllipsesOutline,
    title: "Ask Anything",
    description:
      "Ask questions about the video and get answers grounded in what was actually discussed.",
  },
];

export default processCardData;