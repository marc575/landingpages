import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaStepForward, FaStepBackward, FaRedo } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PodcastPlayer = ({ 
  title = "Titre du Podcast", 
  image = "https://via.placeholder.com/150", 
  duration = "45:22" 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Gestion de la progression
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(isNaN(currentProgress) ? 0 : currentProgress);
      }
    };

    const interval = setInterval(updateProgress, 1000);
    return () => clearInterval(interval);
  }, []);

  // Contrôles audio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (audioRef.current) {
      audioRef.current.currentTime = (newProgress / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      setIsMuted(newVolume == 0);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 15;
    }
  };

  const skipBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 15;
    }
  };

  const restart = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      setProgress(0);
    }
  };

  return (
    <motion.div 
      className="fixed max-w-md md:max-w-6xl mx-auto rounded-xl lg:rounded-full bottom-1 left-0 right-0 bg-white shadow-lg border-t border-gray-200 "
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className=" max-w-md md:max-w-6xl mx-auto px-4 md:px-8 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Partie gauche : Infos podcast */}
          <div className="flex items-center gap-4 flex-1 min-w-0">
            <img 
              src={image} 
              alt={title} 
              className="w-16 h-16 rounded-lg object-cover"
            />
            
            <div className="min-w-0">
              <h3 className="font-bold text-lg truncate">{title}</h3>
              <p className="text-gray-600 text-sm">{duration}</p>
            </div>
          </div>

          {/* Partie droite : Contrôles */}
          <div className="flex-1 w-full md:w-auto">
            <div className="flex flex-col items-center gap-3">
              {/* Barre de progression */}
              <div className="w-full flex items-center gap-3">
                <span className="text-xs text-gray-500 w-10 text-right">
                  {formatTime(0)}
                  {/* {formatTime((progress / 100) * (audioRef.current?.duration || 0))} */}
                </span>
                
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={progress}
                  onChange={handleProgressChange}
                  className="flex-1 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #000 ${progress}%, #e5e7eb ${progress}%)`
                  }}
                />
                
                <span className="text-xs text-gray-500 w-10">
                  {duration}
                </span>
              </div>

              {/* Contrôles principaux */}
              <div className="flex justify-between gap-16 lg:gap-44">
                <div className="flex items-center gap-4">
                    <button 
                        onClick={restart}
                        className="text-gray-700 hover:text-black transition-colors"
                        title="Recommencer"
                    >
                        <FaRedo />
                    </button>
                    
                    <button 
                        onClick={skipBackward}
                        className="text-gray-700 hover:text-black transition-colors"
                        title="Reculer 15s"
                    >
                        <FaStepBackward />
                    </button>
                    
                    <button 
                        onClick={togglePlay}
                        className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform"
                        title={isPlaying ? 'Pause' : 'Lecture'}
                    >
                        {isPlaying ? <FaPause /> : <FaPlay className="ml-0.5" />}
                    </button>
                    
                    <button 
                        onClick={skipForward}
                        className="text-gray-700 hover:text-black transition-colors"
                        title="Avancer 15s"
                    >
                        <FaStepForward />
                    </button>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <button 
                    onClick={toggleMute}
                    className="text-gray-700 hover:text-black transition-colors"
                    title={isMuted ? 'Activer le son' : 'Désactiver le son'}
                  >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Élément audio invisible */}
      <audio
        ref={audioRef}
        src="https://stream.live.vc.bbcmedia.co.uk/bbc_world_service" // Remplacez par votre URL
        onEnded={() => setIsPlaying(false)}
      />
    </motion.div>
  );
};

// Helper pour formater le temps (mm:ss)
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
};

export default PodcastPlayer;