import { AES, PBKDF2 } from 'react-native-simple-crypto';

// IMPORTANT: The following functions are STUBS and need to be implemented
// correctly according to the react-native-simple-crypto documentation
// and Expo compatibility. Make sure to handle Utils correctly if it exists or manage byte conversions.

const DEFAULT_SALT = 'LumeaDefaultSaltForPBKDF2'; // Should be unique per app, can be in .env
const DEFAULT_ITERATIONS = 10000;
const DEFAULT_KEY_SIZE = 256; // bits
const DEFAULT_HASH_ALGORITHM = 'SHA256';

/**
 * Derives a key from a password using PBKDF2.
 */
export const deriveKey = async (
  password: string,
  salt: string = DEFAULT_SALT,
  iterations: number = DEFAULT_ITERATIONS,
  keySize: number = DEFAULT_KEY_SIZE,
  hash: 'SHA1' | 'SHA256' | 'SHA512' = DEFAULT_HASH_ALGORITHM,
): Promise<string> => {
  console.warn(
    'deriveKey is a STUB and needs proper implementation with react-native-simple-crypto.',
  );
  // Example structure (actual API may vary):
  // const key = await PBKDF2.hash(password, salt, iterations, keySize / 8, hash);
  // return key; // This should be a hex string
  return `mockDerivedKey-salt:${salt}-iter:${iterations}-size:${keySize}-hash:${hash}-${password}`;
};

/**
 * Encrypts text using AES-GCM.
 * The key should be a hex string (e.g., derived from PBKDF2).
 */
export const encryptAES = async (
  plainText: string,
  keyHex: string,
  ivHex?: string, // Optional: if not provided, a random IV will be generated and returned
): Promise<{ cipherText: string; iv: string }> => {
  console.warn(
    'encryptAES is a STUB and needs proper implementation with react-native-simple-crypto.',
  );
  // Example structure (actual API may vary, especially IV generation and Utils usage):
  // const keyBytes = Utils.hexToBytes(keyHex);
  // const ivGenerated = ivHex ? Utils.hexToBytes(ivHex) : await AES.generateIv(); // AES.generateIv() might not exist
  // const { ciphertext, iv: actualIvUsed } = await AES.encrypt(plainText, keyBytes, ivGenerated, 'AES-GCM');
  // return { cipherText, iv: Utils.bytesToHex(actualIvUsed) }; // ciphertext is base64, iv hex
  return {
    cipherText: `mockCipherText-key:${keyHex}-${plainText}`,
    iv: ivHex || 'mockRandomIVHexGenerated',
  };
};

/**
 * Decrypts AES-GCM encrypted text.
 * The key and iv should be hex strings.
 */
export const decryptAES = async (
  cipherTextBase64: string, // Assuming ciphertext from encryptAES is base64
  keyHex: string,
  ivHex: string,
): Promise<string> => {
  console.warn(
    'decryptAES is a STUB and needs proper implementation with react-native-simple-crypto.',
  );
  // Example structure (actual API may vary, especially Utils usage):
  // const keyBytes = Utils.hexToBytes(keyHex);
  // const ivBytes = Utils.hexToBytes(ivHex);
  // const decryptedText = await AES.decrypt(cipherTextBase64, keyBytes, ivBytes, 'AES-GCM');
  // return decryptedText;
  return `mockDecryptedText-key:${keyHex}-iv:${ivHex}-${cipherTextBase64.substring(0, 20)}...`;
};

// Example Usage (for testing/demonstration - DO NOT USE these stubs for real data):
/*
const testCryptoStubs = async () => {
  try {
    const password = 'mySecretPassword';
    console.log('[STUB] Original Password:', password);

    const derivedKeyHex = await deriveKey(password);
    console.log('[STUB] Derived Key (Hex):', derivedKeyHex);

    const plainText = 'Hello Lumea! This is a secret message via stubs.';
    console.log('[STUB] Plain Text:', plainText);

    // Encryption
    const { cipherText, iv } = await encryptAES(plainText, derivedKeyHex);
    console.log('[STUB] Encrypted (Ciphertext):', cipherText);
    console.log('[STUB] Encrypted (IV Hex):', iv);

    // Decryption
    const decryptedText = await decryptAES(cipherText, derivedKeyHex, iv);
    console.log('[STUB] Decrypted Text:', decryptedText);

    // This comparison will fail with stubs, it's just for structural example
    if (plainText === decryptedText) {
      console.log('[STUB] Crypto Test: SUCCESS (if stubs were real)');
    } else {
      console.error('[STUB] Crypto Test: FAILED - Decrypted text does not match original (expected with stubs).');
    }
  } catch (e) {
    console.error('[STUB] Crypto Test: ERROR', e);
  }
};

// testCryptoStubs();
*/
