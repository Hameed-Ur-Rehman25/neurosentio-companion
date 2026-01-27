import appScreen from "@/assets/app-mockup.png";

interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup = ({ className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone frame */}
      <div className="relative bg-[#1a1a1a] rounded-[3rem] p-2 shadow-2xl">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-10" />
        
        {/* Screen bezel */}
        <div className="relative rounded-[2.5rem] overflow-hidden bg-black">
          {/* Screen content */}
          <img
            src={appScreen}
            alt="NeuroSentio app showing the panic button home screen"
            className="w-full h-auto block"
          />
        </div>
        
        {/* Side buttons - Volume */}
        <div className="absolute left-[-3px] top-28 w-[3px] h-8 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-3px] top-40 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
        <div className="absolute left-[-3px] top-56 w-[3px] h-12 bg-[#2a2a2a] rounded-l-sm" />
        
        {/* Side button - Power */}
        <div className="absolute right-[-3px] top-36 w-[3px] h-16 bg-[#2a2a2a] rounded-r-sm" />
      </div>
    </div>
  );
};

export default PhoneMockup;
