import { Platform } from 'react-native';
import RNFS from 'react-native-fs';
import storage from '@react-native-firebase/storage';

export const uploadTestVideo = async () => {
  try {
    let localFilePath;

    if (Platform.OS === 'ios') {
      localFilePath = `${RNFS.MainBundlePath}/assets/video/sample.mov`;
      console.log('📱 iOS file path:', localFilePath);
    } else {
      const androidAssetPath = 'video/sample.mov';
      const tempPath = `${RNFS.TemporaryDirectoryPath}/sample.mov`;

      console.log('📱 Android asset:', androidAssetPath);
      console.log('🛠 Copying to:', tempPath);

      await RNFS.copyFileAssets(androidAssetPath, tempPath);

      console.log('✅ File copied to temp path');
      localFilePath = tempPath;
    }

    const remoteFilePath = 'videos/sample-video.mp4';

    console.log('🚀 Uploading:', localFilePath);
    await storage().ref(remoteFilePath).putFile(localFilePath);
    console.log('✅ Video uploaded to Firebase Storage');

    const downloadUrl = await storage().ref(remoteFilePath).getDownloadURL();
    console.log('📦 Download URL:', downloadUrl);
  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
};

