export const animationOne = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export const animationTwo = {
  hidden: {
    opacity: 0,
    y: "-100vh",
    scale: 0.3,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
};

export const animationThree = {
  hidden: {
    opacity: 0,
    x: 300,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  exit: {
    opacity: 1,
    x: -300,
  },
};
