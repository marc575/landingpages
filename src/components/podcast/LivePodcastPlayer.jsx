import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaPause } from 'react-icons/fa';

const LivePodcastPlayer = ({ title = "Mon Podcast en Direct" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioContext, setAudioContext] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const audioRef = useRef(null);
  const animationRef = useRef(null);
  const canvasRef = useRef(null);

  // URL d'un stream audio de test (remplacez par votre vrai stream)
  const audioUrl = "https://stream.live.vc.bbcmedia.co.uk/bbc_world_service";

  useEffect(() => {
    // Initialiser l'audio context
    const initAudio = async () => {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const analyserNode = ctx.createAnalyser();
      analyserNode.fftSize = 64;

      const source = ctx.createMediaElementSource(audioRef.current);
      source.connect(analyserNode);
      analyserNode.connect(ctx.destination);

      const bufferLength = analyserNode.frequencyBinCount;
      const newDataArray = new Uint8Array(bufferLength);

      setAudioContext(ctx);
      setAnalyser(analyserNode);
      setDataArray(newDataArray);
    };

    if (isPlaying) {
      initAudio();
    }

    return () => {
      if (audioContext) {
        audioContext.close();
      }
      cancelAnimationFrame(animationRef.current);
    };
  }, [isPlaying, audioContext]);

  useEffect(() => {
    if (!analyser || !dataArray) return;

    const draw = () => {
      animationRef.current = requestAnimationFrame(draw);
      
      analyser.getByteFrequencyData(dataArray);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;
      
      ctx.clearRect(0, 0, width, height);
      
      const barWidth = 2;
      let x = 0;
      
      for (let i = 0; i < analyser.frequencyBinCount; i++) {
        const barHeight = (dataArray[i] / 255) * height;
        
        ctx.fillStyle = '#000000';
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [analyser, dataArray]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="relative">
        {/* Élément en forme de pilule */}
        <div className="bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full shadow-lg p-2 pl-4 pr-6 flex items-center max-w-xs">
          {/* Canvas pour la visualisation audio */}
          <div className="w-16 h-12 mr-3 flex items-center">
            <canvas 
              ref={canvasRef} 
              width="60" 
              height="30"
              className="w-full h-full"
            />
          </div>

          {/* Titre du podcast (tronqué si trop long) */}
          <p className="text-black font-medium text-sm flex-1 truncate mr-1">
            {title}
          </p>

          {/* Bouton play/pause */}
          <button 
            onClick={togglePlay}
            className="w-10 h-10 bg-black text-yellow-400 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform"
          >
            {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} className="ml-0.5" />}
          </button>
        </div>

        {/* Élément de badge "LIVE" */}
        <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
          LIVE
        </div>
      </div>

      {/* Élément audio invisible */}
      <audio 
        ref={audioRef} 
        src={audioUrl} 
        crossOrigin="anonymous"
        onEnded={() => setIsPlaying(false)}
      />
    </motion.div>
  );
};

export default LivePodcastPlayer;