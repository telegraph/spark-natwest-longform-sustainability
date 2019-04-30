// Triggers animation change when element becomes visible
// state (visible state), setState (set the visibility state), ref (DOM element)
const makeVisible = (state, setState, ref) => {
  let distance = state;
  const currentTitle = ref.current.getBoundingClientRect().top - window.innerHeight;
  window.addEventListener('scroll', () => {
    distance = currentTitle;
    if (distance < -200) {
      setState(1);
    } else if (distance < 0 && state) {
      setState(0);
    }
  });
};

export default makeVisible;
