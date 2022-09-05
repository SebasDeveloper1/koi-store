import React from 'react';

export function useScreenSize() {
  const [widthScreen, setWidthScreen] = React.useState(
    document.documentElement.scrollWidth
  );
  React.useEffect(() => {
    window.addEventListener('resize', () => {
      setWidthScreen(document.documentElement.scrollWidth);
    });
  }, [widthScreen]);

  return widthScreen;
}
