const requiredEnv = [
    'NEXT_PUBLIC_APPWRITE_HOST_URL',
    'NEXT_PUBLIC_APPWRITE_PROJECT_ID',
    'APPWRITE_API_KEY'
  ];
  
  function getEnvVar(name: string): string {
    const value = process.env[name];
    if (!value) {
      throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
  }
  
  const env = {
    appwrite: {
      endpoint: getEnvVar('NEXT_PUBLIC_APPWRITE_HOST_URL'),
      projectId: getEnvVar('NEXT_PUBLIC_APPWRITE_PROJECT_ID'),
      apikey: getEnvVar('APPWRITE_API_KEY')
    }
  };
  
  export default env