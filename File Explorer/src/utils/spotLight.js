/*-----------------------------------------------------------------------------------

    Description: Open Source Projects 

-----------------------------------------------------------------------------------*/
const  spotLight = (appRef, containerRef, border = false) => {

  containerRef.addEventListener('mousemove', e => updateEffect(e));
  const updateEffect = (e) => {
    const { left, top } = appRef.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    Object.assign(appRef.style, {
      background: border
        ? undefined
        : `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0))`,
      borderImage: `radial-gradient(20% 75% at ${x}px ${y}px, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.1)) 1 / 1px / 0px stretch`,
    });
    containerRef.addEventListener('mouseleave', () => (appRef.removeAttribute('style')));
  };
};

export default spotLight;
