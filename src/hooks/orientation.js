import * as ScreenOrientation from 'expo-screen-orientation';


export function lockOrientationToPortrait() {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
}

export async function goodOrientation(){

  await ScreenOrientation.unlockAsync();

ScreenOrientation.addOrientationChangeListener((liveOrientation) => 
    {

  if (liveOrientation.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT) {
    // Lock the screen orientation to landscape left
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
  }
  else if (liveOrientation.orientationInfo.orientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT) {

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }
  else{
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  }
}
);
}





