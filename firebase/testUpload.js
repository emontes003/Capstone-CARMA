import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

export const uploadTestFile = async () => {
  try {
    // Create a local text file for testing
    const path = `${RNFS.DocumentDirectoryPath}/test_upload.txt`;
    await RNFS.writeFile(path, 'Hello from React Native Firebase Storage!', 'utf8');

    // Upload it to Firebase Storage
    const reference = storage().ref('uploads/test_upload.txt');
    await reference.putFile(path);

    console.log('✅ File uploaded successfully!');
  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
};
