import React from 'react'

type Props = {}

const Introduction = (props: Props) => {
  return (
    <div className="m-28">
        <div className="h-96 bg-slate-950/70 backdrop-blur rounded-lg w-full max-w-3xl mx-auto overflow-y-scroll shadow-xl cursor-text font-mono">
            <TerminalHeader />
            <TerminalBody  />
        </div>
    </div>
  )
}

export default Introduction


const TerminalHeader = () => {
  return (
    <div className="w-full p-3 bg-slate-900 flex items-center gap-1 sticky top-0">
      <div className="w-3 h-3 rounded-full bg-red-500" />
      <div className="w-3 h-3 rounded-full bg-yellow-500" />
      <div className="w-3 h-3 rounded-full bg-green-500" />
      <span className="text-sm text-slate-200 font-semibold absolute left-[50%] -translate-x-[50%]">
        Welcome to the Resume API Documentation
      </span>
    </div>
  );
};

const TerminalBody = () => {

  return (
    <div className="p-2 text-slate-100 text-lg">
      <InitialText />
    </div>
  );
};

const InitialText = () => {
  return (
    <>
      <p>This API allows you to access and retrieve specific content from my resume programmatically.</p>
      <br />
      <p className="whitespace-nowrap overflow-hidden font-light">
        ------------------------------------------------------------------------
      </p>
      <br />
      <p>To get started click on one of the categories to the left on the sidebar under 'Getting Started'
        where you can learn how to interact with the various endpoints that make up my resume API.</p>
    </>
  );
};