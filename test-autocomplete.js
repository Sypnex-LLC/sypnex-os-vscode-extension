// Test file to verify sypnexAPI autocomplete is working
// Type "sypnexAPI." and you should see all 65 API methods
// Hover over any method name to see documentation

async function testApp() {
    // Initialize the API - hover over "init" 
    await sypnexAPI.init();
    
    // Test some common methods - hover over these method names
    const appId = sypnexAPI.getAppId();
    const isInit = sypnexAPI.isInitialized();
    
    // Test async methods - hover over these
    await sypnexAPI.getSetting('myKey', 'defaultValue');
    await sypnexAPI.deleteVirtualItem('/path/to/file');

    // Test file operations - hover over these
    await sypnexAPI.readVirtualFile('/test.txt');
    await sypnexAPI.writeVirtualFile('/output.txt', 'content');
    
    // Test settings - hover over these
    await sypnexAPI.setSetting('key', 'value');
    
    // Test logging - hover over these
    await sypnexAPI.logInfo('Test message');
    await sypnexAPI.logError('Error message');
}
