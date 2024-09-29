import React from "react"
import { motion } from "framer-motion"
import ResumeLeftColumn from "./ResumeLeftColumn"
import ResumeRightColumn from "./ResumeRightColumn"
import DownloadButton from "./DownloadButton"
const Resume = () => {
  return (
    <>
      {/*} <motion.div
        layout
        className="relative grid md:grid-cols-6 grid-rows-1 text-white mt-5"
      >
        <ResumeLeftColumn />
        <ResumeRightColumn />
      </motion.div> {*/}
      <DownloadButton />
    </>
  )
}

export default Resume
