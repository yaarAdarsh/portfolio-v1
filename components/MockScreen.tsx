export default function MockScreen() {
  return (
    <>
      <div className="flex gap-1.5 px-3.5 py-2.5 border-b border-linesoft bg-white/[0.015]">
        <span className="w-2 h-2 rounded-full bg-line block" />
        <span className="w-2 h-2 rounded-full bg-line block" />
        <span className="w-2 h-2 rounded-full bg-line block" />
      </div>
      <div className="p-6 grid gap-3 min-h-[210px] content-start">
        {/* Replace this whole block with:
            <img src="/project-one.png" alt="Project screenshot" className="w-full h-auto -m-6 mb-0" style={{width: 'calc(100% + 3rem)'}} />
            or simpler: remove this div and put an <img> directly inside <ProjectVisual> */}
        <div className="h-2.5 rounded bg-gradient-to-r from-amber to-amber/15 w-1/3" />
        <div className="h-2 rounded bg-line w-[85%]" />
        <div className="h-2 rounded bg-line w-[45%]" />
        <div className="grid grid-cols-3 gap-2.5 mt-1">
          <div className="h-12 rounded-md bg-raise border border-linesoft" />
          <div className="h-12 rounded-md bg-gradient-to-br from-blue/15 to-raise border border-linesoft" />
          <div className="h-12 rounded-md bg-raise border border-linesoft" />
        </div>
        <div className="h-2 rounded bg-line w-[70%]" />
      </div>
    </>
  );
}
