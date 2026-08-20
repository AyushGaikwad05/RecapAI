import { CgTranscript } from "react-icons/cg";
import { IoMdSearch } from "react-icons/io";
import { VscGithubAction } from "react-icons/vsc";
import { PiVideoCameraFill } from "react-icons/pi";


const FeatureCardData= [
     {
       icon: CgTranscript,
       title: "Smart Transcription",
       description:
         "Convert your video into accurate, timestamped transcripts and identify different speakers automatically.",
     },

       {
         icon: IoMdSearch,
         title: "Semantic Video Search",
         description:
           "Search through hours of recorded content using natural language and find the most relevant moments instantly.",
       },
         {
           icon: VscGithubAction,
           title: "Automatic Action Items",
           description:
             "Detect tasks, decisions, responsibilities, and deadlines from conversations and turn them into actionable items.",
         },
           {
             icon: PiVideoCameraFill,
             title: "Ask Your Video",
             description:
               "Ask questions about anything discussed in the recording and get answers grounded in the actual conversation.",
           },
]

export default FeatureCardData;