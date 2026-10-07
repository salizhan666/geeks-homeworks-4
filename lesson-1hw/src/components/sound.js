const SOUND_VOLUME = 0.5;

export const playSound = (src) => {
    const audio = new Audio(src);
    audio.volume = SOUND_VOLUME;
    audio.play().catch(() => {});
};
