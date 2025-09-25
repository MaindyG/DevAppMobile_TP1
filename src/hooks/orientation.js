import * as ScreenOrientation from 'expo-screen-orientation';


export async function changeScreenOrientation(lockOrientation) {
    if (!lockOrientation) {
        console.log("unlockOrientation");
        await ScreenOrientation.unlockAsync()
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.ALL);
    }
    else {
        console.log("lockOrientation");
        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
}




