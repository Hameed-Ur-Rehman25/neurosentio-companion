import appScreen from "@/assets/app-mockup.png";

interface PhoneMockupProps {
  className?: string;
}

const PhoneMockup = ({ className = "" }: PhoneMockupProps) => {
  return (
    <div className={`relative ${className}`} style={{ perspective: "1000px" }}>
      {/* Background shape */}
      <div 
        className="absolute -top-16 -left-16 -right-16 -bottom-16 bg-gradient-to-br from-accent/30 via-gentle-green/20 to-calm-purple/20 rounded-[4rem] -z-10"
        style={{ 
          transform: "rotateY(-8deg) rotateX(5deg)",
        }}
      />
      
      {/* Phone with 3D tilt */}
      <div
        className="relative"
        style={{
          transform: "rotateY(-12deg) rotateX(5deg) rotateZ(-3deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Phone frame */}
        <div className="relative bg-[#1a1a1a] rounded-[3rem] p-2 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_30px_60px_-30px_rgba(0,0,0,0.5)]">
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
          
          {/* Subtle reflection/shine effect */}
          <div 
            className="absolute inset-0 rounded-[3rem] pointer-events-none"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
